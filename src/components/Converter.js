import React, {useState, useEffect} from 'react';

const CurrencyConverter = () => {
	const [result, setResult] = useState(null);
	const [currencies, setCurrencies] = useState([]);
	const [toCurrency, setToCurrency] = useState('GBP');
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [amount, setAmount] = useState(1);

	const handleChange= (e)=> {
		setAmount(e.target.value)
	}
	const handleFrom= (e)=>{
		setFromCurrency( e.target.value)
	}
	const handleTo= (e)=>{
		setToCurrency(e.target.value)
	}

	const handleConversion = async (e)=>{
		e.preventDefault()
		if (fromCurrency !== toCurrency) {
			try {
				const data = await fetch(`https://api.openrates.io/latest?base${fromCurrency}&symbols=${toCurrency}`)
				const result = await data.json()
				setToCurrency( result.rate.toCurrency)
			} catch (err) {
				alert('unable to process conversion ', err.message);
			}
		}
		else {
			setResult('You cant convert the same currency')
		}
	}

	useEffect(()=>
		async () => {
			try {
				console.log(amount)
				const results = await fetch('https://api.openrates.io/latest')
				const currencyResults = await results.json()
				const currencyArr = ['EUR']
				const data = currencyResults.rates
				const keys = Object.keys(data)
				const currencies = [...currencyArr, ...keys]
				setCurrencies(currencies)
			} catch (err) {
				alert('unable to fetch Currencies ', err.message)
			}
		}	
	, [amount]);
	console.log('currencies :', currencies)
	console.log('result : ', result)
		return (
			<>
				<div className='container'>

					<h2>currency converter</h2>

					<form onSubmit={handleConversion}>
						<div className='form-group'>
							<input type='number' value={amount}
								name='amount'
								onChange={handleChange}
								className='form-control'
								min='1'
							/>
						</div>

						<div className='form-group'>
							<select
								name='fromCurrency'
								onChange={handleFrom}
								value={fromCurrency}
								className='form-control'>
								{currencies.map(currency => (<option key={currency} value={currency}>{currency}</option>))}
							</select>
						</div>

						<div className='form-group'>
							<select
								name='toCurrency'
								onChange={handleTo}
								value={toCurrency}
								className='form-control'>
								{currencies.map(currency => (<option key={currency} value={currency}>{currency}</option>))}
							</select>
						</div>
						<button className='btn btn-primary btn-lg'>Convert</button>
					</form>
					<div className='container'>{result && <h3>{result}</h3>}</div>
				</div>
			</>
		)
}

export default CurrencyConverter