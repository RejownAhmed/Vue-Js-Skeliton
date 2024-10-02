/**
 * Find the descendent value from a dot notation index point
 * @param {object} obj { title: { en: "This is post title" }, description: "Hello" }
 * @param {string} desc "title.en"
 * @returns {any} "This is a post title"
 */
export const getDescendantProp = (obj, desc) => {
  var arr = desc.split(".");
  while (arr.length && (obj = obj[arr.shift()]));
  return obj;
};

/**
 * Find if a value is matched against a query
 * @param {object[]|object|string|number} value
 * @param {string|number} query
 * @param {boolean} exact
 * @returns {boolean}
 */
export const findIsMatch = (value, query, exact = false) => {
  let isMatch = false;

  // If value is an array
  if (Array.isArray(value)) {
    // Find match for any values inside the array
    value.forEach((el) => {
      if (findIsMatch(el, query)) {
        isMatch = true;
      }
    });

    // Then return the match state
    return isMatch;
  } else if (typeof value === "object") {
    // If value is an object
    // Find match for any keys
    for (let key in value) if (findIsMatch(value[key], query)) isMatch = true;

    // then return the match state
    return isMatch;
  } else if (exact) {
    // If exact match
    return (
      value.toString().toLowerCase().replace(/\s+/g, "") ===
      query.toString().toLowerCase().replace(/\s+/g, "")
    );
  }

  // Else simply match the value against the query and return
  else {
    return value
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "")
      .includes(query.toString().toLowerCase().replace(/\s+/g, ""));
  }
};

/**
 * Find matched objects from an array against a query
 * @param {object[]} data
 * @param {string|number} query
 * @param {string} searchBy Search by a specific key
 * @param {boolean} exact
 * @returns {object[]}
 */
export const findMatched = (data = [], query, searchBy = "any", exact = false) => {
  // Initialize the matched stack
  const matched = [];
  data.forEach((element) => {
    if (searchBy === "any") {
      // If the any field can be searched
      // Find match for each key in the object and if match found
      // Push the object to the matched stack
      for (let key in element) {
        if (findIsMatch(element[key], query, exact) && matched.indexOf(element) < 0) {
          matched.push(element);
        }
      }
    } else {
      // Else search by an specific key
      // First get the value of the specific key and find if the value matches
      // If matched then push to the matched stack
      if (
        findIsMatch(getDescendantProp(element, searchBy), query, exact) &&
        matched.indexOf(element) < 0
      )
        matched.push(element);
    }
  });

  // Return the matched stack
  return matched;
};
