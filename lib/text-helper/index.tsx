export const stripHtml = (str: string): string => {
  if (str === null || str === "") return "";
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "");
};

export const truncateString = (
  str: string,
  num: number = 160,
  showThreeDots: boolean = true
): string => {
  //trim the string to the maximum length
  var trimmedString = str.substring(0, num);

  //re-trim if we are in the middle of a word
  trimmedString = trimmedString.substring(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  if (str.length > num) {
		if (showThreeDots) {
			trimmedString += "...";
		}
    return trimmedString ;
  } else {
    return trimmedString;
  }
};
