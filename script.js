angular.module('financHub', [])
    .controller('CalculatorController', function($scope, $http) {
        $scope.calculators = [
            {
                id: 'emi',
                name: 'EMI Calculator',
                inputs: [
                    {id: 'loanAmount', label: 'Loan Amount', type: 'number'},
                    {id: 'interestRate', label: 'Interest Rate (%)', type: 'number'},
                    {id: 'loanTerm', label: 'Loan Term (months)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'A lower interest rate can significantly reduce your EMI.',
                    'Consider making a larger down payment to reduce your loan amount.',
                    'Shorter loan terms usually mean higher EMIs but lower overall interest.'
                ]
            },
            {
                id: 'budget',
                name: 'Budget Calculator',
                inputs: [
                    {id: 'income', label: 'Monthly Income', type: 'number'},
                    {id: 'expenses', label: 'Monthly Expenses', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Try to save at least 20% of your income.',
                    'Track your expenses to identify areas where you can cut back.',
                    'Consider using the 50/30/20 rule: 50% needs, 30% wants, 20% savings.'
                ]
            },
            {
                id: 'savings',
                name: 'Savings Calculator',
                inputs: [
                    {id: 'initialAmount', label: 'Initial Amount', type: 'number'},
                    {id: 'monthlyContribution', label: 'Monthly Contribution', type: 'number'},
                    {id: 'interestRate', label: 'Annual Interest Rate (%)', type: 'number'},
                    {id: 'years', label: 'Number of Years', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Start saving early to take advantage of compound interest.',
                    'Increase your savings rate as your income grows.',
                    'Consider high-yield savings accounts for better returns.'
                ]
            },
            {
                id: 'investment',
                name: 'Investment Return Calculator',
                inputs: [
                    {id: 'initialInvestment', label: 'Initial Investment', type: 'number'},
                    {id: 'monthlyContribution', label: 'Monthly Contribution', type: 'number'},
                    {id: 'annualReturn', label: 'Expected Annual Return (%)', type: 'number'},
                    {id: 'years', label: 'Investment Period (years)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Diversify your investment portfolio to manage risk.',
                    'Reinvest dividends to maximize compound growth.',
                    'Consider the impact of inflation on your long-term returns.'
                ]
            },
            {
                id: 'retirement',
                name: 'Retirement Calculator',
                inputs: [
                    {id: 'currentAge', label: 'Current Age', type: 'number'},
                    {id: 'retirementAge', label: 'Retirement Age', type: 'number'},
                    {id: 'currentSavings', label: 'Current Savings', type: 'number'},
                    {id: 'monthlySavings', label: 'Monthly Savings', type: 'number'},
                    {id: 'expectedReturn', label: 'Expected Annual Return (%)', type: 'number'},
                    {id: 'inflationRate', label: 'Inflation Rate (%)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Start saving for retirement as early as possible.',
                    'Increase your savings rate as your income grows.',
                    'Consider consulting a financial advisor for personalized retirement planning.'
                ]
            },
            {
                id: 'mortgage',
                name: 'Mortgage Calculator',
                inputs: [
                    {id: 'homeValue', label: 'Home Value', type: 'number'},
                    {id: 'downPayment', label: 'Down Payment', type: 'number'},
                    {id: 'loanTerm', label: 'Loan Term (years)', type: 'number'},
                    {id: 'interestRate', label: 'Interest Rate (%)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'A larger down payment can reduce your monthly mortgage payments.',
                    'Consider the impact of property taxes and insurance on your total housing costs.',
                    'Compare offers from multiple lenders to find the best mortgage rate.'
                ]
            },
            {
                id: 'creditCardPayoff',
                name: 'Credit Card Payoff Calculator',
                inputs: [
                    {id: 'balance', label: 'Current Balance', type: 'number'},
                    {id: 'interestRate', label: 'Annual Interest Rate (%)', type: 'number'},
                    {id: 'monthlyPayment', label: 'Monthly Payment', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Pay more than the minimum payment to reduce debt faster.',
                    'Consider transferring high-interest balances to a lower-interest card.',
                    'Avoid new credit card purchases while paying off debt.'
                ]
            },
            {
                id: 'tax',
                name: 'Income Tax Calculator',
                inputs: [
                    {id: 'annualIncome', label: 'Annual Income', type: 'number'},
                    {id: 'deductions', label: 'Total Deductions', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Keep track of all eligible deductions to reduce your taxable income.',
                    'Consider consulting a tax professional for complex tax situations.',
                    'Stay informed about changes in tax laws that may affect your liability.'
                ]
            },
            {
                id: 'netWorth',
                name: 'Net Worth Calculator',
                inputs: [
                    {id: 'assets', label: 'Total Assets', type: 'number'},
                    {id: 'liabilities', label: 'Total Liabilities', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Regularly update your net worth calculation to track your financial progress.',
                    'Focus on increasing assets and reducing liabilities to improve your net worth.',
                    'Consider the long-term value of your assets when making financial decisions.'
                ]
            },
            {
                id: 'compoundInterest',
                name: 'Compound Interest Calculator',
                inputs: [
                    {id: 'principal', label: 'Principal Amount', type: 'number'},
                    {id: 'interestRate', label: 'Annual Interest Rate (%)', type: 'number'},
                    {id: 'compoundFrequency', label: 'Compound Frequency (per year)', type: 'number'},
                    {id: 'years', label: 'Number of Years', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'The higher the compound frequency, the more your money will grow.',
                    'Even small increases in the interest rate can lead to significant differences over time.',
                    'Start investing early to maximize the power of compound interest.'
                ]
            },
            {
                id: 'inflation',
                name: 'Inflation Calculator',
                inputs: [
                    {id: 'currentAmount', label: 'Current Amount', type: 'number'},
                    {id: 'inflationRate', label: 'Annual Inflation Rate (%)', type: 'number'},
                    {id: 'years', label: 'Number of Years', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Consider the impact of inflation when planning for long-term financial goals.',
                    'Aim for investments that outpace inflation to maintain purchasing power.',
                    'Regularly review and adjust your budget to account for inflation.'
                ]
            },
            {
                id: 'loanEligibility',
                name: 'Loan Eligibility Calculator',
                inputs: [
                    {id: 'monthlyIncome', label: 'Monthly Income', type: 'number'},
                    {id: 'monthlyExpenses', label: 'Monthly Expenses', type: 'number'},
                    {id: 'interestRate', label: 'Loan Interest Rate (%)', type: 'number'},
                    {id: 'loanTerm', label: 'Loan Term (years)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Maintain a good credit score to improve your loan eligibility.',
                    'Reduce existing debts to increase your borrowing capacity.',
                    'Consider a co-applicant to potentially increase your loan eligibility.'
                ]
            },
            {
                id: 'sip',
                name: 'SIP Calculator',
                inputs: [
                    {id: 'monthlyInvestment', label: 'Monthly Investment', type: 'number'},
                    {id: 'expectedReturn', label: 'Expected Annual Return (%)', type: 'number'},
                    {id: 'years', label: 'Investment Period (years)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Consistency is key in SIP investments.',
                    'Increase your SIP amount periodically to align with your income growth.',
                    'Choose funds that align with your risk tolerance and investment goals.'
                ]
            },
            {
                id: 'debtToIncome',
                name: 'Debt-to-Income Ratio Calculator',
                inputs: [
                    {id: 'monthlyIncome', label: 'Monthly Income', type: 'number'},
                    {id: 'monthlyDebts', label: 'Total Monthly Debt Payments', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Aim to keep your debt-to-income ratio below 36%.',
                    'Pay off high-interest debts first to improve your ratio.',
                    'Increase your income or reduce expenses to lower your debt-to-income ratio.'
                ]
            },
            {
                id: 'expenseSplit',
                name: 'Expense Split Calculator',
                inputs: [
                    {id: 'totalExpense', label: 'Total Expense', type: 'number'},
                    {id: 'numberOfPeople', label: 'Number of People', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Use digital payment apps to easily split and track shared expenses.',
                    'Consider income-based splitting for fairness in shared living situations.',
                    'Keep clear records of shared expenses to avoid conflicts.'
                ]
            },
            {
                id: 'homeAffordability',
                name: 'Home Affordability Calculator',
                inputs: [
                    {id: 'annualIncome', label: 'Annual Income', type: 'number'},
                    {id: 'monthlyDebts', label: 'Monthly Debts', type: 'number'},
                    {id: 'downPayment', label: 'Down Payment', type: 'number'},
                    {id: 'interestRate', label: 'Interest Rate (%)', type: 'number'},
                    {id: 'loanTerm', label: 'Loan Term (years)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Consider all costs of homeownership, not just the mortgage.',
                    'A larger down payment can increase your home affordability.',
                    'Improving your credit score can help you get a better interest rate.'
                ]
            },
            {
                id: 'leaseBuy',
                name: 'Lease vs. Buy Calculator',
                inputs: [
                    {id: 'carPrice', label: 'Car Price', type: 'number'},
                    {id: 'downPayment', label: 'Down Payment', type: 'number'},
                    {id: 'tradeInValue', label: 'Trade-in Value', type: 'number'},
                    {id: 'loanTerm', label: 'Loan Term (months)', type: 'number'},
                    {id: 'interestRate', label: 'Interest Rate (%)', type: 'number'},
                    {id: 'leaseTerm', label: 'Lease Term (months)', type: 'number'},
                    {id: 'leaseDownPayment', label: 'Lease Down Payment', type: 'number'},
                    {id: 'monthlyLease', label: 'Monthly Lease Payment', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Consider your long-term plans when deciding between leasing and buying.',
                    'Factor in maintenance costs for buying, which are often covered in leases.',
                    'Remember that leasing often has mileage restrictions.'
                ]
            },
            {
                id: 'hourlyToAnnual',
                name: 'Hourly Wage to Annual Salary Calculator',
                inputs: [
                    {id: 'hourlyWage', label: 'Hourly Wage', type: 'number'},
                    {id: 'hoursPerWeek', label: 'Hours Worked Per Week', type: 'number'},
                    {id: 'vacationDays', label: 'Paid Vacation Days Per Year', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Remember to factor in overtime pay if applicable.',
                    'Consider the value of benefits when comparing job offers.',
                    'Use this calculation to budget your annual expenses.'
                ]
            },
            {
                id: 'breakEven',
                name: 'Break-Even Calculator',
                inputs: [
                    {id: 'fixedCosts', label: 'Fixed Costs', type: 'number'},
                    {id: 'variableCostsPerUnit', label: 'Variable Costs Per Unit', type: 'number'},
                    {id: 'pricePerUnit', label: 'Price Per Unit', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Lowering fixed costs can help achieve break-even faster.',
                    'Increasing price per unit can lower your break-even point.',
                    'Regularly review and update your break-even analysis.'
                ]
            },
            {
                id: 'collegeSavings',
                name: 'College Savings Calculator',
                inputs: [
                    {id: 'currentAge', label: 'Child\'s Current Age', type: 'number'},
                    {id: 'collegeStartAge', label: 'Age Child Starts College', type: 'number'},
                    {id: 'annualCost', label: 'Annual College Cost', type: 'number'},
                    {id: 'yearsInCollege', label: 'Years in College', type: 'number'},
                    {id: 'currentSavings', label: 'Current Savings', type: 'number'},
                    {id: 'monthlyContribution', label: 'Monthly Contribution', type: 'number'},
                    {id: 'expectedReturn', label: 'Expected Annual Return (%)', type: 'number'},
                    {id: 'inflationRate', label: 'College Cost Inflation Rate (%)', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Start saving early to take advantage of compound interest.',
                    'Consider tax-advantaged college savings accounts like 529 plans.',
                    'Regularly review and adjust your savings plan as needed.'
                ]
            },
            {
                id: 'earlyLoanPayoff',
                name: 'Early Loan Payoff Calculator',
                inputs: [
                    {id: 'loanAmount', label: 'Loan Amount', type: 'number'},
                    {id: 'interestRate', label: 'Interest Rate (%)', type: 'number'},
                    {id: 'loanTerm', label: 'Loan Term (years)', type: 'number'},
                    {id: 'extraPayment', label: 'Extra Monthly Payment', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Even small extra payments can significantly reduce your loan term.',
                    'Check if your loan has any prepayment penalties.',
                    'Consider the opportunity cost of extra payments vs. other investments.'
                ]
            },
            {
                id: 'healthInsurance',
                name: 'Health Insurance Premium Calculator',
                inputs: [
                    {id: 'age', label: 'Age', type: 'number'},
                    {id: 'smoker', label: 'Smoker', type: 'checkbox'},
                    {id: 'coverageType', label: 'Coverage Type', type: 'select', options: ['Individual', 'Family']},
                    {id: 'annualIncome', label: 'Annual Income', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Compare different plans to find the best balance of coverage and cost.',
                    'Consider your health needs when choosing a plan.',
                    'Check if you\'re eligible for any subsidies based on your income.'
                ]
            },
            {
                id: 'rentalYield',
                name: 'Rental Yield Calculator',
                inputs: [
                    {id: 'propertyValue', label: 'Property Value', type: 'number'},
                    {id: 'annualRent', label: 'Annual Rental Income', type: 'number'},
                    {id: 'annualExpenses', label: 'Annual Expenses', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Higher rental yield doesn\'t always mean better investment.',
                    'Consider potential for capital growth alongside rental yield.',
                    'Factor in all expenses, including maintenance and vacancy periods.'
                ]
            },
            {
                id: 'currencyConverter',
                name: 'Currency Converter',
                inputs: [
                    {id: 'amount', label: 'Amount', type: 'number'},
                    {id: 'fromCurrency', label: 'From Currency', type: 'select', options: ['USD', 'EUR', 'GBP', 'JPY', 'INR']},
                    {id: 'toCurrency', label: 'To Currency', type: 'select', options: ['USD', 'EUR', 'GBP', 'JPY', 'INR']}
                ],
                values: {},
                result: null,
                tips: [
                    'Exchange rates fluctuate constantly, so check rates regularly.',
                    'Be aware of any fees for currency conversion.',
                    'Consider using a multi-currency account for frequent conversions.'
                ]
            },
            {
                id: 'profitMargin',
                name: 'Business Profit Margin Calculator',
                inputs: [
                    {id: 'revenue', label: 'Total Revenue', type: 'number'},
                    {id: 'costs', label: 'Total Costs', type: 'number'}
                ],
                values: {},
                result: null,
                tips: [
                    'Aim to increase revenue and decrease costs to improve profit margin.',
                    'Compare your profit margin to industry benchmarks.',
                    'Consider both gross and net profit margins for a complete picture.'
                ]
            }
        ];

        $scope.calculate = function(calcId) {
            var calc = $scope.calculators.find(c => c.id === calcId);
            switch(calcId) {
                case 'emi':
                    var p = calc.values.loanAmount;
                    var r = (calc.values.interestRate / 100) / 12;
                    var n = calc.values.loanTerm;
                    var emi = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
                    calc.result = {
                        'Monthly EMI': emi.toFixed(2),
                        'Total Interest': ((emi * n) - p).toFixed(2),
                        'Total Amount': (emi * n).toFixed(2)
                    };
                    break;
                case 'budget':
                    var income = calc.values.income;
                    var expenses = calc.values.expenses;
                    calc.result = {
                        'Surplus/Deficit': (income - expenses).toFixed(2),
                        'Savings Rate': ((income - expenses) / income * 100).toFixed(2) + '%'
                    };
                    break;
                case 'savings':
                    var p = calc.values.initialAmount;
                    var pmt = calc.values.monthlyContribution;
                    var r = calc.values.interestRate / 100 / 12;
                    var n = calc.values.years * 12;
                    var fv = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r);
                    calc.result = {
                        'Future Value': fv.toFixed(2),
                        'Total Contributions': (p + pmt * n).toFixed(2),
                        'Interest Earned': (fv - p - pmt * n).toFixed(2)
                    };
                    break;
                case 'investment':
                    var p = calc.values.initialInvestment;
                    var pmt = calc.values.monthlyContribution;
                    var r = calc.values.annualReturn / 100 / 12;
                    var n = calc.values.years * 12;
                    var fv = p * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r);
                    calc.result = {
                        'Future Value': fv.toFixed(2),
                        'Total Invested': (p + pmt * n).toFixed(2),
                        'Total Return': (fv - p - pmt * n).toFixed(2)
                    };
                    break;
                case 'retirement':
                    var currentAge = calc.values.currentAge;
                    var retirementAge = calc.values.retirementAge;
                    var currentSavings = calc.values.currentSavings;
                    var monthlySavings = calc.values.monthlySavings;
                    var expectedReturn = calc.values.expectedReturn / 100;
                    var inflationRate = calc.values.inflationRate / 100;
                    var years = retirementAge - currentAge;
                    var monthlyRate = Math.pow(1 + expectedReturn, 1/12) - 1;
                    var futureValue = currentSavings * Math.pow(1 + expectedReturn, years) +
                                      monthlySavings * ((Math.pow(1 + monthlyRate, years * 12) - 1) / monthlyRate);
                    var inflationAdjustedValue = futureValue / Math.pow(1 + inflationRate, years);
                    calc.result = {
                        'Retirement Savings': futureValue.toFixed(2),
                        'Inflation-Adjusted Value': inflationAdjustedValue.toFixed(2)
                    };
                    break;
                case 'mortgage':
                    var p = calc.values.homeValue - calc.values.downPayment;
                    var r = (calc.values.interestRate / 100) / 12;
                    var n = calc.values.loanTerm * 12;
                    var monthlyPayment = p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
                    calc.result = {
                        'Monthly Payment': monthlyPayment.toFixed(2),
                        'Total Interest': ((monthlyPayment * n) - p).toFixed(2),
                        'Total Cost': (monthlyPayment * n).toFixed(2)
                    };
                    break;
                case 'creditCardPayoff':
                    var balance = calc.values.balance;
                    var monthlyRate = calc.values.interestRate / 100 / 12;
                    var monthlyPayment = calc.values.monthlyPayment;
                    var months = Math.log(monthlyPayment / (monthlyPayment - balance * monthlyRate)) / Math.log(1 + monthlyRate);
                    var totalInterest = monthlyPayment * months - balance;
                    calc.result = {
                        'Months to Pay Off': Math.ceil(months),
                        'Total Interest Paid': totalInterest.toFixed(2)
                    };
                    break;
                case 'tax':
                    var income = calc.values.annualIncome;
                    var deductions = calc.values.deductions;
                    var taxableIncome = income - deductions;
                    var tax = 0;
                    if (taxableIncome <= 250000) {
                        tax = 0;
                    } else if (taxableIncome <= 500000) {
                        tax = (taxableIncome - 250000) * 0.05;
                    } else if (taxableIncome <= 750000) {
                        tax = 12500 + (taxableIncome - 500000) * 0.10;
                    } else if (taxableIncome <= 1000000) {
                        tax = 37500 + (taxableIncome - 750000) * 0.15;
                    } else if (taxableIncome <= 1250000) {
                        tax = 75000 + (taxableIncome - 1000000) * 0.20;
                    } else if (taxableIncome <= 1500000) {
                        tax = 125000 + (taxableIncome - 1250000) * 0.25;
                    } else {
                        tax = 187500 + (taxableIncome - 1500000) * 0.30;
                    }
                    calc.result = {
                        'Taxable Income': taxableIncome.toFixed(2),
                        'Income Tax': tax.toFixed(2)
                    };
                    break;
                case 'netWorth':
                    var assets = calc.values.assets;
                    var liabilities = calc.values.liabilities;
                    var netWorth = assets - liabilities;
                    calc.result = {
                        'Net Worth': netWorth.toFixed(2)
                    };
                    break;
                case 'compoundInterest':
                    var p = calc.values.principal;
                    var r = calc.values.interestRate / 100;
                    var n = calc.values.compoundFrequency;
                    var t = calc.values.years;
                    var amount = p * Math.pow((1 + r/n), n*t);
                    calc.result = {
                        'Final Amount': amount.toFixed(2),
                        'Interest Earned': (amount - p).toFixed(2)
                    };
                    break;
                case 'inflation':
                    var currentAmount = calc.values.currentAmount;
                    var inflationRate = calc.values.inflationRate / 100;
                    var years = calc.values.years;
                    var futureAmount = currentAmount * Math.pow(1 + inflationRate, years);
                    calc.result = {
                        'Future Value': futureAmount.toFixed(2),
                        'Purchasing Power Loss': (currentAmount - futureAmount).toFixed(2)
                    };
                    break;
                case 'loanEligibility':
                    var monthlyIncome = calc.values.monthlyIncome;
                    var monthlyExpenses = calc.values.monthlyExpenses;
                    var interestRate = calc.values.interestRate / 100 / 12;
                    var loanTerm = calc.values.loanTerm * 12;
                    var eligibleEMI = (monthlyIncome - monthlyExpenses) * 0.5;
                    var eligibleLoanAmount = eligibleEMI * ((Math.pow(1 + interestRate, loanTerm) - 1) / (interestRate * Math.pow(1 + interestRate, loanTerm)));
                    calc.result = {
                        'Eligible Loan Amount': eligibleLoanAmount.toFixed(2),
                        'Maximum EMI': eligibleEMI.toFixed(2)
                    };
                    break;
                case 'sip':
                    var monthlyInvestment = calc.values.monthlyInvestment;
                    var expectedReturn = calc.values.expectedReturn / 100 / 12;
                    var months = calc.values.years * 12;
                    var futureValue = monthlyInvestment * ((Math.pow(1 + expectedReturn, months) - 1) / expectedReturn) * (1 + expectedReturn);
                    calc.result = {
                        'Future Value': futureValue.toFixed(2),
                        'Total Investment': (monthlyInvestment * months).toFixed(2),
                        'Wealth Gain': (futureValue - monthlyInvestment * months).toFixed(2)
                    };
                    break;
                case 'debtToIncome':
                    var monthlyIncome = calc.values.monthlyIncome;
                    var monthlyDebts = calc.values.monthlyDebts;
                    var ratio = (monthlyDebts / monthlyIncome) * 100;
                    calc.result = {
                        'Debt-to-Income Ratio': ratio.toFixed(2) + '%'
                    };
                    break;
                case 'expenseSplit':
                    var totalExpense = calc.values.totalExpense;
                    var numberOfPeople = calc.values.numberOfPeople;
                    var splitAmount = totalExpense / numberOfPeople;
                    calc.result = {
                        'Amount per Person': splitAmount.toFixed(2)
                    };
                    break;
                case 'homeAffordability':
                    var annualIncome = calc.values.annualIncome;
                    var monthlyDebts = calc.values.monthlyDebts;
                    var downPayment = calc.values.downPayment;
                    var interestRate = calc.values.interestRate / 100 / 12;
                    var loanTerm = calc.values.loanTerm * 12;
                    
                    var monthlyIncome = annualIncome / 12;
                    var maxMonthlyPayment = (monthlyIncome * 0.28) - monthlyDebts;
                    var loanAmount = (maxMonthlyPayment / interestRate) * (1 - Math.pow(1 + interestRate, -loanTerm));
                    var homePrice = loanAmount + downPayment;
                    
                    calc.result = {
                        'Affordable Home Price': homePrice.toFixed(2),
                        'Maximum Loan Amount': loanAmount.toFixed(2)
                    };
                    break;

                case 'leaseBuy':
                    var carPrice = calc.values.carPrice;
                    var downPayment = calc.values.downPayment;
                    var tradeInValue = calc.values.tradeInValue;
                    var loanTerm = calc.values.loanTerm;
                    var interestRate = calc.values.interestRate / 100 / 12;
                    var leaseTerm = calc.values.leaseTerm;
                    var leaseDownPayment = calc.values.leaseDownPayment;
                    var monthlyLease = calc.values.monthlyLease;

                    var loanAmount = carPrice - downPayment - tradeInValue;
                    var monthlyLoan = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
                    var totalLoanCost = (monthlyLoan * loanTerm) + downPayment;
                    var totalLeaseCost = (monthlyLease * leaseTerm) + leaseDownPayment;

                    calc.result = {
                        'Monthly Loan Payment': monthlyLoan.toFixed(2),
                        'Total Loan Cost': totalLoanCost.toFixed(2),
                        'Total Lease Cost': totalLeaseCost.toFixed(2),
                        'Difference (Loan - Lease)': (totalLoanCost - totalLeaseCost).toFixed(2)
                    };
                    break;

                case 'hourlyToAnnual':
                    var hourlyWage = calc.values.hourlyWage;
                    var hoursPerWeek = calc.values.hoursPerWeek;
                    var vacationDays = calc.values.vacationDays;

                    var weeksWorked = 52 - (vacationDays / 5);
                    var annualSalary = hourlyWage * hoursPerWeek * weeksWorked;

                    calc.result = {
                        'Annual Salary': annualSalary.toFixed(2)
                    };
                    break;

                case 'breakEven':
                    var fixedCosts = calc.values.fixedCosts;
                    var variableCostsPerUnit = calc.values.variableCostsPerUnit;
                    var pricePerUnit = calc.values.pricePerUnit;

                    var breakEvenUnits = fixedCosts / (pricePerUnit - variableCostsPerUnit);
                    var breakEvenSales = breakEvenUnits * pricePerUnit;

                    calc.result = {
                        'Break-Even Units': Math.ceil(breakEvenUnits),
                        'Break-Even Sales': breakEvenSales.toFixed(2)
                    };
                    break;

                case 'collegeSavings':
                    var currentAge = calc.values.currentAge;
                    var collegeStartAge = calc.values.collegeStartAge;
                    var annualCost = calc.values.annualCost;
                    var yearsInCollege = calc.values.yearsInCollege;
                    var currentSavings = calc.values.currentSavings;
                    var monthlyContribution = calc.values.monthlyContribution;
                    var expectedReturn = calc.values.expectedReturn / 100;
                    var inflationRate = calc.values.inflationRate / 100;

                    var yearsUntilCollege = collegeStartAge - currentAge;
                    var totalCost = 0;
                    var savings = currentSavings;

                    for (var i = 0; i < yearsInCollege; i++) {
                        totalCost += annualCost * Math.pow(1 + inflationRate, yearsUntilCollege + i);
                    }

                    for (var i = 0; i < yearsUntilCollege * 12; i++) {
                        savings *= (1 + expectedReturn / 12);
                        savings += monthlyContribution;
                    }

                    calc.result = {
                        'Total College Cost': totalCost.toFixed(2),
                        'Projected Savings': savings.toFixed(2),
                        'Shortfall/Surplus': (savings - totalCost).toFixed(2)
                    };
                    break;

                case 'earlyLoanPayoff':
                    var loanAmount = calc.values.loanAmount;
                    var interestRate = calc.values.interestRate / 100 / 12;
                    var loanTerm = calc.values.loanTerm * 12;
                    var extraPayment = calc.values.extraPayment;

                    var regularPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
                    var totalRegularPayments = regularPayment * loanTerm;

                    var balance = loanAmount;
                    var months = 0;
                    var totalPayments = 0;

                    while (balance > 0) {
                        months++;
                        var interest = balance * interestRate;
                        var principal = regularPayment - interest;
                        balance -= (principal + extraPayment);
                        totalPayments += (regularPayment + extraPayment);
                        if (balance < 0) {
                            totalPayments += balance;
                            balance = 0;
                        }
                    }

                    calc.result = {
                        'Original Loan Term': loanTerm + ' months',
                        'New Loan Term': months + ' months',
                        'Total Interest Saved': (totalRegularPayments - totalPayments).toFixed(2)
                    };
                    break;

                case 'healthInsurance':
                    var age = calc.values.age;
                    var smoker = calc.values.smoker;
                    var coverageType = calc.values.coverageType;
                    var annualIncome = calc.values.annualIncome;

                    var basePremium = 5000;
                    var premium = basePremium;

                    if (age > 50) premium *= 1.2;
                    if (smoker) premium *= 1.5;
                    if (coverageType === 'Family') premium *= 1.8;

                    var subsidyPercentage = 0;
                    if (annualIncome< 30000) subsidyPercentage = 0.8;
                    else if (annualIncome < 50000) subsidyPercentage = 0.5;
                    else if (annualIncome < 80000) subsidyPercentage = 0.2;

                    var subsidy = premium * subsidyPercentage;

                    calc.result = {
                        'Monthly Premium': (premium / 12).toFixed(2),
                        'Annual Premium': premium.toFixed(2),
                        'Monthly Subsidy': (subsidy / 12).toFixed(2),
                        'Annual Subsidy': subsidy.toFixed(2),
                        'Your Monthly Cost': ((premium - subsidy) / 12).toFixed(2),
                        'Your Annual Cost': (premium - subsidy).toFixed(2)
                    };
                    break;

                case 'rentalYield':
                    var propertyValue = calc.values.propertyValue;
                    var annualRent = calc.values.annualRent;
                    var annualExpenses = calc.values.annualExpenses;

                    var grossYield = (annualRent / propertyValue) * 100;
                    var netYield = ((annualRent - annualExpenses) / propertyValue) * 100;

                    calc.result = {
                        'Gross Rental Yield': grossYield.toFixed(2) + '%',
                        'Net Rental Yield': netYield.toFixed(2) + '%'
                    };
                    break;

                case 'currencyConverter':
                    var amount = calc.values.amount;
                    var fromCurrency = calc.values.fromCurrency;
                    var toCurrency = calc.values.toCurrency;

                    // In a real application, you would fetch live exchange rates here
                    // For this example, we'll use static rates
                    var exchangeRates = {
                        USD: 1,
                        EUR: 0.85,
                        GBP: 0.73,
                        JPY: 110,
                        INR: 74
                    };

                    var convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

                    calc.result = {
                        'Converted Amount': convertedAmount.toFixed(2) + ' ' + toCurrency
                    };
                    break;

                case 'profitMargin':
                    var revenue = calc.values.revenue;
                    var costs = calc.values.costs;

                    var profit = revenue - costs;
                    var profitMargin = (profit / revenue) * 100;

                    calc.result = {
                        'Profit': profit.toFixed(2),
                        'Profit Margin': profitMargin.toFixed(2) + '%'
                    };
                    break;
            }
        };

        // You might want to add any additional controller logic here
    });

