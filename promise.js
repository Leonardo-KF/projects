function joinStrings(string1, string2) {
  return new Promise((resolve, reject) => {
    let confirm = false;
    if (!confirm) {
      resolve();
      console.log(string1 + string2);
    } else {
      reject("ERRO");
    }
  });
}
joinStrings("Blue", "Edtech").then(function () {});
