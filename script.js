function minDate(dates) {
  return dates.reduce((earliest, current) => {
    // Convert both dates to Date objects for comparison
    const earliestDate = new Date(earliest);
    const currentDate = new Date(current);

    // Return the earlier of the two dates
    return earliestDate < currentDate ? earliest : current;
  });
}

// Example Usage
console.log(minDate(["2023/03/01", "2023/03/02", "2023/03/03"])); // Output: "2023/03/01"
console.log(minDate(["2023/01/01", "2023/02/02", "2022/12/31"])); // Output: "2022/12/31"
