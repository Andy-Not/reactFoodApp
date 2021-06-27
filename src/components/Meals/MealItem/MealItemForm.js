import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
const MealItemForm = () => {
    return(
        <form action="" className={classes.form}>
            <Input label={"Ammound"} input={{id: "amount", type: "number",min: "1",
                max: "5",
                step:"1",
                defaultValue:"1"}}/>
            <button>+ Add</button>
        </form>)
}
export default MealItemForm;