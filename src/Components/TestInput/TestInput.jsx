
    import { useForm, useFieldArray } from 'react-hook-form';
    
    const TestInput = () => {
      const { register, control, handleSubmit } = useForm({
        defaultValues: {
          sku: [
            {
              id: '',
              selling_price: '',
              max_retail_price: '',
             
              customer_profile: {
                id: '',
                name: '',
              },
              amount: '',
              unit: ''
            }
          ]
        }
      });
    
      const { fields, append, remove } = useFieldArray({
        control,
        name: 'sku'
      });
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field, index) => (
            <div key={field.id}>
              <h4>SKU {index + 1}</h4>
              <label>ID:</label>
              <input {...register(`sku.${index}.id`)} defaultValue={field.id} />
    
              <h5>Customer Profile</h5>
              <label>Profile ID:</label>
              <input {...register(`sku.${index}.customer_profile.id`)} defaultValue={field.customer_profile.id} />

              <label>Type:</label>
              <input {...register(`sku.${index}.customer_profile.type`)} defaultValue={field.customer_profile.type} />
    
              <label>Profile Pic:</label>
              <input {...register(`sku.${index}.customer_profile.profile_pic`)} defaultValue={field.customer_profile.profile_pic} />
    
              <label>Quantity in Inventory:</label>
              <input {...register(`sku.${index}.quantity_in_inventory`)} defaultValue={field.quantity_in_inventory} />
    
              <label>Product:</label>
              <input {...register(`sku.${index}.product`)} defaultValue={field.product} />
    
              <button type="button" onClick={() => remove(index)}>Remove</button>
            </div>
          ))}
          {/* <button type="button" onClick={() => append({
            id: '',
            selling_price: '',
            max_retail_price: '',
            customer: '',
            customer_profile: {
              id: '',
              name: '',
              color: '',
              email: '',
              pincode: '',
              location_name: '',
              type: '',
              profile_pic: '',
              gst: ''
            },
            amount: '',
            unit: '',
            quantity_in_inventory: '',
            product: ''
          })}>Add SKU</button> */}
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default TestInput;
    