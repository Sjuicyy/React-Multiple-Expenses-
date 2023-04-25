function DateFilter(props) {
    const filterChangeHandler = (e) =>{
        props.latestFilterValue(e.target.value);
    }
  return (
    <div>
      <p>Filter:</p>
      <select onChange={filterChangeHandler} >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
}
export default DateFilter;
