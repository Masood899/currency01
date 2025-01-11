import React, { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

const exchangeRates = {
  USD: { EUR: 0.85, GBP: 0.75, JPY: 110, AUD: 1.35, CAD: 1.25, CHF: 0.92, CNY: 6.45, INR: 73.5 },
  EUR: { USD: 1.18, GBP: 0.88, JPY: 129.53, AUD: 1.59, CAD: 1.47, CHF: 1.08, CNY: 7.58, INR: 86.47 },
  GBP: { USD: 1.33, EUR: 1.14, JPY: 147.25, AUD: 1.81, CAD: 1.68, CHF: 1.23, CNY: 8.62, INR: 98.3 },
  JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, AUD: 0.012, CAD: 0.011, CHF: 0.0084, CNY: 0.059, INR: 0.67 },
  AUD: { USD: 0.74, EUR: 0.63, GBP: 0.55, JPY: 83.33, CAD: 0.93, CHF: 0.68, CNY: 4.79, INR: 54.44 },
  CAD: { USD: 0.80, EUR: 0.68, GBP: 0.60, JPY: 89.29, AUD: 1.08, CHF: 0.73, CNY: 5.16, INR: 58.49 },
  CHF: { USD: 1.09, EUR: 0.93, GBP: 0.81, JPY: 119.05, AUD: 1.47, CAD: 1.37, CNY: 7.07, INR: 79.78 },
  CNY: { USD: 0.15, EUR: 0.13, GBP: 0.12, JPY: 16.95, AUD: 0.21, CAD: 0.19, CHF: 0.14, INR: 11.29 },
  INR: { USD: 0.014, EUR: 0.012, GBP: 0.010, JPY: 1.49, AUD: 0.018, CAD: 0.017, CHF: 0.013, CNY: 0.089 }
};

const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR'];

function App() {
  const [amount, setAmount] = useState<string>('1');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const exchangeRate = exchangeRates[fromCurrency][toCurrency];
  const convertedAmount = (parseFloat(amount) * exchangeRate).toFixed(2);
  const rateText = `1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Currency Converter
        </h1>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="Enter amount"
              min="0"
            />
          </div>

          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                {popularCurrencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSwapCurrencies}
              className="mt-6 p-2 rounded-full hover:bg-gray-100 transition"
            >
              <ArrowRightLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              >
                {popularCurrencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">{rateText}</p>
              <div className="text-3xl font-bold text-gray-800">
                {`${convertedAmount} ${toCurrency}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
