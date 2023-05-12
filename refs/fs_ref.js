const fs = require("fs");
const path = require("path");

//  fs.mkdir(path.join(__dirname, 'notes'), function(err) {
//     if(err) throw new Error(err)
//     console.log('Папка была создана ')
//  })

// fs.writeFile(
//   path.join(__dirname, "notes", "mynotes.txt"),
//   "Hello Node.js",
//   function (err) {
//     if (err) {
//       throw err;
//     }
//     console.log("Файл был создан");

//     fs.appendFile(
//       path.join(__dirname, "notes", "mynotes.txt"),
//       " From my appendFile",
//       function (err) {
//         if (err) throw err;
//         console.log(" Добавили данные");
//         fs.readFile(
//           path.join(__dirname, "notes", "mynotes.txt"),
//           function (err, data) {
//              if (err) throw err;
//             console.log(Buffer.from(data).toString());
//           }
//         );
//       }
//     );
//   }
// );


fs.rename(path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    function(err) {
        if(err) throw err
        console.log('Файл был переименован')
    }
)