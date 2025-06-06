import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface GoldPrice {
  price: number;
  currency: string;
  change: number;
  change_percent: number;
  timestamp: number;
}

const GoldPriceChart = () => {
  const [goldData, setGoldData] = useState<GoldPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [historicalData, setHistoricalData] = useState<any[]>([]);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
          headers: {
            'x-access-token': 'goldapi-gec58smbj4h2pi-io',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch gold price');
        }

        const data = await response.json();
        setGoldData(data);
        
        // Generate some mock historical data for the chart
        const mockHistoricalData = [];
        const basePrice = data.price;
        for (let i = 6; i >= 0; i--) {
          const variation = (Math.random() - 0.5) * 100;
          mockHistoricalData.push({
            date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
            price: basePrice + variation,
          });
        }
        setHistoricalData(mockHistoricalData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching gold price:', err);
        setError('Unable to fetch current gold prices');
        setLoading(false);
      }
    };

    fetchGoldPrice();
    const interval = setInterval(fetchGoldPrice, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Live Gold Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !goldData) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Live Gold Price</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 text-gray-500">
            <p>{error || 'No data available'}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const chartConfig = {
    price: {
      label: "Price (USD)",
      color: "#EAB308",
    },
  };

  const isPositive = goldData.change >= 0;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Live Gold Price (XAU/USD)</span>
          <div className={`flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {goldData.change_percent !== undefined && (
              <span className="text-sm font-medium">
                {isPositive ? '+' : ''}
                {goldData.change_percent.toFixed(2)}%
              </span>
            )}

          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Current Price</p>
              <p className="text-2xl font-bold text-yellow-600">
                ${goldData.price.toFixed(2)}
              </p>
            </div>
          
          </div>
          
         <div className="h-74 w-full">
  <ChartContainer config={chartConfig}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={historicalData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#ccc' }}
          tickLine={false}
          interval="preserveStartEnd"
          minTickGap={10}
        />
        <YAxis
          domain={['dataMin - 50', 'dataMax + 50']}
          tick={{ fontSize: 12 }}
          axisLine={{ stroke: '#ccc' }}
          tickLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="price"
          stroke="var(--color-price)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
</div>

          
          <p className="text-xs text-gray-500 text-center">
            Last updated: {new Date(goldData.timestamp * 1000).toLocaleString()}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoldPriceChart;