const sql = require("./db.js");
// constructor
const Tables = function(table) {
  this.id = table.id;
  this.heure = table.heure;
  this.temps = table.temps;
  this.nb_tab = table.nb_tab;
  this.tab_presence = table.nb_tab;
};

Tables.getRondes = result => {
  sql.query("SELECT R.ID_RDE id, R.DATE_RDE heure, R.TPS_RDE temps, P.ID_TAB_PHT nb_tab, GROUP_CONCAT(P.REF_PHT ORDER BY P.ID_TAB_PHT) AS tab_presence, FLOOR((((CHAR_LENGTH(GROUP_CONCAT(P.REF_PHT ORDER BY P.ID_TAB_PHT)))+1)/2)) nb_tab FROM RONDE R JOIN PHOTO P ON P.ID_RDE_PHT = R.ID_RDE GROUP BY R.ID_RDE;", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Rondes: ", res);
    result(null, res);
  });
};

module.exports = Tables;
