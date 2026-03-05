"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Calculator, IndianRupee, BarChart3 } from "lucide-react";

const ROICalculator = () => {
  const [amountInvested, setAmountInvested] = useState(100000);
  const [amountReturned, setAmountReturned] = useState(150000);
  const [investmentPeriod, setInvestmentPeriod] = useState([3]);

  // Calculated values
  const [totalGain, setTotalGain] = useState(0);
  const [roi, setRoi] = useState(0);
  const [simpleAnnualRoi, setSimpleAnnualRoi] = useState(0);
  const [cagr, setCagr] = useState(0);

  useEffect(() => {
    const calculateROI = () => {
      const gain = amountReturned - amountInvested;
      const roiPercent = amountInvested > 0 ? (gain / amountInvested) * 100 : 0;
      const annualRoi = investmentPeriod[0] > 0 ? roiPercent / investmentPeriod[0] : 0;
      const cagrPercent = investmentPeriod[0] > 0 && amountInvested > 0 
        ? (Math.pow(amountReturned / amountInvested, 1 / investmentPeriod[0]) - 1) * 100 
        : 0;

      setTotalGain(gain);
      setRoi(roiPercent);
      setSimpleAnnualRoi(annualRoi);
      setCagr(cagrPercent);
    };

    calculateROI();
  }, [amountInvested, amountReturned, investmentPeriod]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percent: number) => {
    return `${percent.toFixed(2)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="h-6 w-6 text-primary" />
            ROI Calculator - Return on Investment Calculator
          </CardTitle>
          <p className="text-muted-foreground">
            Calculate your investment returns and analyze profitability across different time periods
          </p>
        </CardHeader>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Investment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount Invested */}
            <div className="space-y-2">
              <Label htmlFor="invested" className="text-base font-medium">
                Amount Invested
              </Label>
              <div className="flex">
                <div className="px-4 h-10 flex items-center justify-center bg-muted border border-input border-r-0 rounded-l-md">
                  ₹
                </div>
                <Input
                  id="invested"
                  type="number"
                  value={amountInvested}
                  onChange={(e) => setAmountInvested(Number(e.target.value) || 0)}
                  className="border-l-0 rounded-l-none"
                  placeholder="Enter amount invested"
                />
              </div>
            </div>

            {/* Amount Returned */}
            <div className="space-y-2">
              <Label htmlFor="returned" className="text-base font-medium">
                Amount Returned
              </Label>
              <div className="flex">
                <div className="px-4 h-10 flex items-center justify-center bg-muted border border-input border-r-0 rounded-l-md">
                  ₹
                </div>
                <Input
                  id="returned"
                  type="number"
                  value={amountReturned}
                  onChange={(e) => setAmountReturned(Number(e.target.value) || 0)}
                  className="border-l-0 rounded-l-none"
                  placeholder="Enter amount returned"
                />
              </div>
            </div>

            {/* Investment Period */}
            <div className="space-y-4">
              <Label className="text-base font-medium">
                Investment Period (in years)
              </Label>
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="col-span-2">
                  <Slider
                    value={investmentPeriod}
                    onValueChange={setInvestmentPeriod}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={investmentPeriod[0]}
                    onChange={(e) => setInvestmentPeriod([Number(e.target.value) || 1])}
                    min={1}
                    max={50}
                    className="w-20"
                  />
                  <span className="text-sm text-muted-foreground">Years</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Investment Returns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Total Gain */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-base font-medium">Total Gain on Investment</span>
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatCurrency(totalGain)}
              </div>
            </div>

            <hr />

            {/* ROI Percentage */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-blue-600" />
                <span className="text-base font-medium">Return on Investment (ROI)</span>
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatPercentage(roi)}
              </div>
            </div>

            <hr />

            {/* Simple Annual ROI */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <span className="text-base font-medium">Simple Annual ROI</span>
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatPercentage(simpleAnnualRoi)}
              </div>
            </div>

            <hr />

            {/* CAGR */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <span className="text-base font-medium">Compound Annual Growth Rate (CAGR)</span>
              </div>
              <div className="text-2xl font-bold text-primary">
                {formatPercentage(cagr)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Information Section */}
      <Card>
        <CardHeader>
          <CardTitle>About ROI Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">What is ROI?</h3>
            <p className="text-muted-foreground">
              Return on Investment (ROI) is a financial ratio that measures the profitability of an investment. 
              It shows the return from your investments as a percentage of the original investment amount.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">How is ROI calculated?</h3>
            <p className="text-muted-foreground mb-2">
              <strong>ROI = (Net Profit ÷ Cost of Investment) × 100</strong>
            </p>
            <p className="text-muted-foreground">
              Where Net Profit = Amount Returned - Amount Invested
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">What is CAGR?</h3>
            <p className="text-muted-foreground">
              Compound Annual Growth Rate (CAGR) represents the mean annual growth rate of an investment over a specified period, 
              assuming the profits are reinvested at the end of each year.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ROICalculator;