module.exports = {
  index: (req, res) => {
    // res.send('Hola aqui vamos');
    res.render("pages/index", { stylePath: "index" });
  },
};
