export const summary = [
  {
    mainTitle: {
      name: "Chapter 1",
      url: "chapter1"
    },
    subTitles: [
      { name: "Linear Search", url: "linearSearch" },
      { name: "Binary Search", url: "binarySearch" }
    ]
  }
];

export const getMainAndSubIndex = url => {
  let chapterRegex = /chapter(\d?)\/(.*)/gm;
  let matches = chapterRegex.exec(url);
  // console.log(matches);
  return [matches[1], matches[2]];
};
