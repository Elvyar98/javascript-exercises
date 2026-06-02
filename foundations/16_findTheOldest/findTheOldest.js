const findTheOldest = function(arr) {
   const getAge = (person) => {
    const deathYear = person.yearOfDeath || (new Date()).getFullYear();
    return deathYear - person.yearOfBirth;
   };

   return arr.reduce((oldest, current) => {
    console.table(current);
    console.log(getAge(current));
    return getAge(current) > getAge(oldest) ? current : oldest;
   });
};

// Do not edit below this line
module.exports = findTheOldest;
