function extractFile(str) {
  let splitStr = str.split('\\');
  let i = Number(splitStr.length - 1);
  let nameAndExtension = splitStr[i];

  let idx = nameAndExtension.lastIndexOf('.');
  let extension = nameAndExtension.substring(idx + 1, nameAndExtension.length);
  let fileName = nameAndExtension.substring(0, idx);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}