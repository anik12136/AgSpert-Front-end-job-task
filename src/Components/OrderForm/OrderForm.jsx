

import { useForm, Controller } from "react-hook-form";
import { Multiselect } from "multiselect-react-dropdown";
import { useState } from "react";
import ProductInput from "../ProductInput/ProductInput";
import TestInput from "../TestInput/TestInput";
import MyComponent from "../MyComponent/MyComponent";
// import './OrderForm.css';


const OrderForm = () => {
    const { control, handleSubmit, formState: { errors }, register } = useForm();

    const [selectData, setSelectdata] = useState([]);

    const onSubmit = (data) => {
        setSelectdata(data.rootCauseAnalysisCategory)
    };
    console.log(selectData);


    const rootCauseAnalysisCategorys = ["Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
    ];
    // const [c1, setC1] = useState(false);
    var c1 = 'no';
    var c2 = 'no';
    var c3 = 'no';
    var c4 = 'no';
    var c5 = 'no';
    


    if (selectData?.indexOf("Category 1") !== -1) {
        c1 = 'yes';
    }
    if (selectData?.indexOf("Category 2") !== -1) {
        c2 = 'yes';
    }
    if (selectData?.indexOf("Category 3") !== -1) {
        c3 = 'yes';
    }
    if (selectData?.indexOf("Category 4") !== -1) {
        c4 = 'yes';
    }
    if (selectData?.indexOf("Category 5") !== -1) {
        c5 = 'yes';
    }
   

    console.log(c1, c2, c3, c4, c5);



    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="rootCauseAnalysisCategory"
                    render={({ field: { value, onChange } }) => (
                        <Multiselect
                            options={rootCauseAnalysisCategorys}
                            isObject={false}
                            showCheckbox={true}
                            hidePlaceholder={true}
                            closeOnSelect={false}
                            onSelect={onChange}
                            onRemove={onChange}
                            selectedValues={value}
                        />
                    )}
                />
                <button className="border p-2 bg-green-700 text-white hover:bg-green-900 mt-2 " type="submit">Create Order</button>
                <br />
            </form>

            <div>
                    <ProductInput
                     c1={c1}
                     c2={c2}
                     c3={c3}
                     c4={c4}
                     c5={c5}
                    ></ProductInput>
            </div>

            <div>
                {/* <TestInput></TestInput> */}
                {/* <MyComponent></MyComponent> */}
            </div>

        </div>
    );
};

export default OrderForm;
