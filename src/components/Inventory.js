import React from 'react';

class CreateProduct extends React.Component{
	constructor(props){
		super(props)
		this.state ={
			brandName :'',
			quantity:0,
		    unitPrice:0,
		    productImage:null,
		    productName:'',
		    sizes:['XL','XXL','S','XS','M','L'],
		    size:'S',
		    colors:['red','black','blue','white'],
		    color:'red'

		}
		this.handleChange = this.handleChange.bind(this)
		this.createProduct  = this.createProduct.bind(this)
		this.handleFileChange = this.handleFileChange.bind(this)
		this.selectHandler = this.selectHandler.bind(this)
	}

	handleChange(e){
     this.setState({[e.target.name]:e.target.value})
	}

	selectHandler(e){
	 this.setState({[e.target.name]:e.target.value})
      
	}

	createProduct(e){
		e.preventDefault()

		const products ={
			brandName : this.state.brandName,
			quantity:this.state.quantity,
			price:this.state.price,
			productName:this.state.productName
    }
    
    let formData = new FormData();


		for(let key of Object.keys(this.state.productImage)){
			formData.append('productImages',this.state.productImage[key])
		}

		formData.append('products',products)

       
     this.setState({
     	brandName:'',
     	quantity:0,
     	price:0,
     	productName:'',
     	productImage:null
     })

      fetch('https://path/to/api',{method:'POST',body:formData})
      .then(response=>response.json())
      .then(success=>alert('Successfully Saved to the Database'))
      .catch(err=>alert('Something happened, Unable to save to the Database'))
		
	}

	
	handleFileChange(e){
		this.setState({productImage:this.state.productImage})
	}


	render(){
		return(
			<React.Fragment>
                 
                <div className ='container'>
                <h4>Create a new product Line</h4>
                  <form onSubmit ={this.createProduct}>
  					 <div className ='form-group'>
                   <label>
                    Product Name
                    <input type ='text'
                    className ='form-control'
                      placeholder ='Product Name'
                       name ='productName'
                        onChange ={this.handleChange}
                        value ={this.state.productName}
                    />
              </label>  
          </div>
               <div className ='form-group'>
                   <label>
                     Unit Price
                    <input type ='Number'
                      className ='form-control'
                      placeholder ='Unit Price'
                       name ='unitPrice'
                        onChange ={this.handleChange}
                        value ={this.state.unitPrice}
                        min ='0'
                    />
                 </label>  
                  </div> 

                  <div className ='form-group'>
                   <label>
                    quantity
                    <input type ='Number'
                      className ='form-control'
                      placeholder ='Unit Price'
                       name ='quantity'
                        onChange ={this.handleChange}
                        value ={this.state.quantity}
                        min ='0'
                    />
                 </label>  
                  </div>
                  <div className ='form-group'>
                   <label>
                     Brand Name
                    <input type ='text'
                      className ='form-control'
                      placeholder ='Brand Name'
                       name ='brandName'
                        onChange ={this.handleChange}
                        value ={this.state.brandName}
                    />
                 </label>  
                  </div>

                   <div className ='form-group'>
         	           <select
         	              name ='size'
         	              onChange = {this.selectHandler}
         	              value = {this.state.size}
         	              className='form-control'>
	         	        {this.state.sizes.map(size=>(<option key ={size} value ={size}>{size}</option>))}
         	           </select>
         	           </div>

         	           <div className ='form-group'>
         	           <select
         	              name ='color'
         	              onChange = {this.selectHandler}
         	              value = {this.state.color}
         	              className='form-control'>
	         	        {this.state.colors.map(color=>(<option key ={color} value ={color}>{color}</option>))}
         	           </select>
         	           </div>

                  <div className ='form-group'>
                   <label>
                     Product Image
                    <input type ='file'
                      className ='form-control'
                      placeholder ='Unit Price'
                       name ='productImage'
                        onChange ={this.handleFileChange}
                         multiple 
                    />
                 </label>  
                  </div>       
                     <button className='btn btn-primary'>Add Product</button>
                  </form>
                </div>
			</React.Fragment>
			)
	}
}

export default CreateProduct
