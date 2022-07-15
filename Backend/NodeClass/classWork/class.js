exports.nation = (country) => {
    let newCountry = []
    country.forEach(e => {
        newCountry.push(e.toUpperCase())
    })
  
     return newCountry
};



//  module.exports = nation;
