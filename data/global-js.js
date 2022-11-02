openPage = (page) => window.open(page + ".html","_top");

storeVar = (variable = null, name = "") => localStorage.setItem(name, JSON.stringify(variable));
restoreVar = (name = "") => {return JSON.parse(localStorage.getItem(name))};
varExists = (name = "") => {return restoreVar(name) != null};







