"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp, TrendingDown, Equal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import gstCsvData from "@/data/gstRateData.csv";

interface GSTRateItem {
  hsnCode: string;
  description: string;
  category: string;
  oldRate: number | string;
  newRate: number | string;
}

// Function to categorize items based on HSN code and description
const categorizeItem = (hsnCode: string, description: string): string => {
  const desc = description.toLowerCase();
  const hsn = hsnCode.toLowerCase();

  if (desc.includes('food') || desc.includes('milk') || desc.includes('cheese') || desc.includes('butter') ||
    desc.includes('meat') || desc.includes('fish') || desc.includes('fruit') || desc.includes('vegetable') ||
    desc.includes('sugar') || desc.includes('chocolate') || desc.includes('coffee') || desc.includes('tea') ||
    desc.includes('rice') || desc.includes('wheat') || desc.includes('grain') || desc.includes('spice') ||
    hsn.startsWith('01') || hsn.startsWith('02') || hsn.startsWith('03') || hsn.startsWith('04') ||
    hsn.startsWith('07') || hsn.startsWith('08') || hsn.startsWith('09') || hsn.startsWith('10') ||
    hsn.startsWith('11') || hsn.startsWith('15') || hsn.startsWith('16') || hsn.startsWith('17') ||
    hsn.startsWith('18') || hsn.startsWith('19') || hsn.startsWith('20') || hsn.startsWith('21') ||
    hsn.startsWith('22')) {
    return "Agriculture & Food";
  }

  if (desc.includes('textile') || desc.includes('cotton') || desc.includes('silk') || desc.includes('wool') ||
    desc.includes('fabric') || desc.includes('clothing') || desc.includes('garment') || desc.includes('shoe') ||
    hsn.startsWith('50') || hsn.startsWith('51') || hsn.startsWith('52') || hsn.startsWith('53') ||
    hsn.startsWith('54') || hsn.startsWith('55') || hsn.startsWith('56') || hsn.startsWith('57') ||
    hsn.startsWith('58') || hsn.startsWith('59') || hsn.startsWith('60') || hsn.startsWith('61') ||
    hsn.startsWith('62') || hsn.startsWith('63') || hsn.startsWith('64') || hsn.startsWith('65')) {
    return "Textiles & Apparel";
  }

  if (desc.includes('medicine') || desc.includes('drug') || desc.includes('pharmaceutical') || desc.includes('medicament') ||
    desc.includes('medical') || desc.includes('surgical') || desc.includes('hospital') || desc.includes('health') ||
    hsn.startsWith('30') || hsn.startsWith('90')) {
    return "Healthcare & Pharmaceuticals";
  }

  if (desc.includes('chemical') || desc.includes('acid') || desc.includes('alcohol') || desc.includes('gas') ||
    desc.includes('plastic') || desc.includes('rubber') || desc.includes('polymer') || desc.includes('resin') ||
    hsn.startsWith('28') || hsn.startsWith('29') || hsn.startsWith('32') || hsn.startsWith('33') ||
    hsn.startsWith('34') || hsn.startsWith('35') || hsn.startsWith('36') || hsn.startsWith('37') ||
    hsn.startsWith('38') || hsn.startsWith('39') || hsn.startsWith('40')) {
    return "Chemicals & Plastics";
  }

  if (desc.includes('metal') || desc.includes('steel') || desc.includes('iron') || desc.includes('copper') ||
    desc.includes('aluminum') || desc.includes('brass') || desc.includes('wire') || desc.includes('pipe') ||
    hsn.startsWith('72') || hsn.startsWith('73') || hsn.startsWith('74') || hsn.startsWith('75') ||
    hsn.startsWith('76') || hsn.startsWith('78') || hsn.startsWith('79') || hsn.startsWith('80') ||
    hsn.startsWith('81') || hsn.startsWith('82') || hsn.startsWith('83')) {
    return "Metals";
  }

  if (desc.includes('machine') || desc.includes('engine') || desc.includes('motor') || desc.includes('equipment') ||
    desc.includes('tool') || desc.includes('instrument') || desc.includes('apparatus') ||
    hsn.startsWith('84') || hsn.startsWith('85')) {
    return "Machinery & Equipment";
  }

  if (desc.includes('vehicle') || desc.includes('car') || desc.includes('truck') || desc.includes('bicycle') ||
    desc.includes('ship') || desc.includes('aircraft') || desc.includes('railway') || desc.includes('transport') ||
    hsn.startsWith('86') || hsn.startsWith('87') || hsn.startsWith('88') || hsn.startsWith('89')) {
    return "Transportation";
  }

  if (desc.includes('cement') || desc.includes('stone') || desc.includes('marble') || desc.includes('granite') ||
    desc.includes('brick') || desc.includes('tile') || desc.includes('glass') || desc.includes('ceramic') ||
    hsn.startsWith('25') || hsn.startsWith('68') || hsn.startsWith('69') || hsn.startsWith('70')) {
    return "Construction & Building Materials";
  }

  if (desc.includes('wood') || desc.includes('timber') || desc.includes('furniture') || desc.includes('paper') ||
    desc.includes('book') || desc.includes('printing') ||
    hsn.startsWith('44') || hsn.startsWith('45') || hsn.startsWith('46') || hsn.startsWith('47') ||
    hsn.startsWith('48') || hsn.startsWith('49') || hsn.startsWith('94')) {
    return "Wood, Paper & Furniture";
  }

  if (desc.includes('tobacco') || desc.includes('cigarette') || desc.includes('bidi') ||
    hsn.startsWith('24')) {
    return "Tobacco Products";
  }

  if (desc.includes('energy') || desc.includes('coal') || desc.includes('oil') || desc.includes('fuel') ||
    desc.includes('electricity') || desc.includes('solar') || desc.includes('wind') ||
    hsn.startsWith('27')) {
    return "Energy & Fuels";
  }

  return "Others";
};

// Parse CSV data
const parseGSTData = (): GSTRateItem[] => {
  const lines = gstCsvData.split('\n').slice(1); // Skip header
  return lines
    .filter(line => line.trim() && !line.startsWith('﻿')) // Filter empty lines
    .map(line => {
      // Parse CSV considering quoted fields
      const fields: string[] = [];
      let current = '';
      let inQuotes = false;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          fields.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      fields.push(current.trim()); // Add the last field

      if (fields.length >= 4) {
        const hsnCode = fields[0].replace(/"/g, '');
        const description = fields[1].replace(/"/g, '');
        const oldRate = fields[2].replace(/"/g, '');
        const newRate = fields[3].replace(/"/g, '');
        const category = categorizeItem(hsnCode, description);

        return {
          hsnCode,
          description,
          category,
          oldRate: oldRate === 'Nil' ? 'Nil' : parseFloat(oldRate) || oldRate,
          newRate: newRate === 'Nil' ? 'Nil' : parseFloat(newRate) || newRate,
        };
      }
      return null;
    })
    .filter((item): item is GSTRateItem => item !== null);
};

const gstRateData: GSTRateItem[] = parseGSTData();

const GSTRateComparison: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [rateChangeFilter, setRateChangeFilter] = useState("all");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(gstRateData.map(item => item.category)));
    return cats.sort();
  }, []);

  const filteredData = useMemo(() => {
    return gstRateData.filter(item => {
      const matchesSearch =
        item.hsnCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;

      const oldRateNum = typeof item.oldRate === 'string' ? 0 : item.oldRate;
      const newRateNum = typeof item.newRate === 'string' ? 0 : item.newRate;

      let matchesRateChange = true;
      if (rateChangeFilter === "increased") {
        matchesRateChange = newRateNum > oldRateNum;
      } else if (rateChangeFilter === "decreased") {
        matchesRateChange = newRateNum < oldRateNum;
      } else if (rateChangeFilter === "unchanged") {
        matchesRateChange = newRateNum === oldRateNum;
      }

      return matchesSearch && matchesCategory && matchesRateChange;
    });
  }, [searchTerm, selectedCategory, rateChangeFilter]);

  const getRateChangeIcon = (oldRate: number | string, newRate: number | string) => {
    const oldRateNum = typeof oldRate === 'string' ? 0 : oldRate;
    const newRateNum = typeof newRate === 'string' ? 0 : newRate;

    if (newRateNum > oldRateNum) {
      return <TrendingUp className="h-4 w-4 text-red-600" />;
    } else if (newRateNum < oldRateNum) {
      return <TrendingDown className="h-4 w-4 text-green-600" />;
    } else {
      return <Equal className="h-4 w-4 text-gray-600" />;
    }
  };

  const getRateChangeBadge = (oldRate: number | string, newRate: number | string) => {
    const oldRateNum = typeof oldRate === 'string' ? 0 : oldRate;
    const newRateNum = typeof newRate === 'string' ? 0 : newRate;

    if (newRateNum > oldRateNum) {
      return <Badge variant="destructive">Increased</Badge>;
    } else if (newRateNum < oldRateNum) {
      return <Badge variant="default" className="bg-green-600 hover:bg-green-700">Decreased</Badge>;
    } else {
      return <Badge variant="secondary">No Change</Badge>;
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setRateChangeFilter("all");
  };

  const stats = useMemo(() => {
    const total = gstRateData.length;
    const increased = gstRateData.filter(item => {
      const oldRateNum = typeof item.oldRate === 'string' ? 0 : item.oldRate;
      const newRateNum = typeof item.newRate === 'string' ? 0 : item.newRate;
      return newRateNum > oldRateNum;
    }).length;
    const decreased = gstRateData.filter(item => {
      const oldRateNum = typeof item.oldRate === 'string' ? 0 : item.oldRate;
      const newRateNum = typeof item.newRate === 'string' ? 0 : item.newRate;
      return newRateNum < oldRateNum;
    }).length;
    const unchanged = total - increased - decreased;

    return { total, increased, decreased, unchanged };
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">GST Rate Comparison Tool</h1>
        <p className="text-gray-600 mb-6">
          Compare old vs new GST rates for {stats.total} different goods and services
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Items</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-red-600">{stats.increased}</div>
            <div className="text-sm text-gray-600">Rate Increased</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-green-600">{stats.decreased}</div>
            <div className="text-sm text-gray-600">Rate Decreased</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-gray-600">{stats.unchanged}</div>
            <div className="text-sm text-gray-600">No Change</div>
          </Card>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter Options
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by HSN code or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={rateChangeFilter} onValueChange={setRateChangeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Rate Change" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Changes</SelectItem>
                <SelectItem value="increased">Rate Increased</SelectItem>
                <SelectItem value="decreased">Rate Decreased</SelectItem>
                <SelectItem value="unchanged">No Change</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={clearFilters} variant="outline">
              Clear All
            </Button>
          </div>

          <div className="text-sm text-gray-600">
            Showing {filteredData.length} of {gstRateData.length} items
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid gap-4">
        {filteredData.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-gray-500">No items found matching your search criteria.</div>
            </CardContent>
          </Card>
        ) : (
          filteredData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        HSN: {item.hsnCode}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2 leading-tight">
                      {item.description}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Old Rate</div>
                      <div className="text-lg font-semibold text-red-600">
                        {typeof item.oldRate === 'string' ? item.oldRate : `${item.oldRate}%`}
                      </div>
                    </div>

                    <div className="flex items-center">
                      {getRateChangeIcon(item.oldRate, item.newRate)}
                    </div>

                    <div className="text-center">
                      <div className="text-sm text-gray-600">New Rate</div>
                      <div className="text-lg font-semibold text-green-600">
                        {typeof item.newRate === 'string' ? item.newRate : `${item.newRate}%`}
                      </div>
                    </div>

                    <div>
                      {getRateChangeBadge(item.oldRate, item.newRate)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {filteredData.length > 0 && (
        <div className="text-center text-sm text-gray-500">
          End of results - {filteredData.length} items displayed
        </div>
      )}
    </div>
  );
};

export default GSTRateComparison;