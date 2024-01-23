import { calculateInvestmentResults, formatter } from '../util/investment';
export default function Results({ input }) {
    console.log(input);
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;
    console.log(resultsData);
    return (

        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>investmentValue</th>
                    <th>Invest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((data) => {
                    const totalInterest =
                        data.valueEndOfYear -
                        data.annualInvestment *
                        data.year -
                        initialInvestment;

                    const totalAmountInterest = data.valueEndOfYear - totalInterest;
                    return (
                        <tr key={data.year}>
                            <th>{data.year}</th>
                            <th>{formatter.format(data.valueEndOfYear)}</th>
                            <th>{formatter.format(data.interest)}</th>
                            <th>{formatter.format(totalInterest)}</th>
                            <th>{formatter.format(totalAmountInterest)}</th>
                        </tr>

                    )
                })}

            </tbody>
        </table>
    );
}