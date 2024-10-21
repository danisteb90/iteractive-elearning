"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface ChartProps {
	data: {
		name: string;
		total: number;
	}[];
}

const Chart = ({ data }: ChartProps) => {
	return (
		<Card className="w-[50%] p-6">
			<ResponsiveContainer width="100%" height={350}>
				<BarChart data={data}>
					<XAxis
						dataKey="name"
						stroke="#888888"
						fontSize={12}
						tickLine={false}
						axisLine={false}
					/>
					<YAxis
						stroke="#888888"
						fontSize={12}
						tickLine={false}
						axisLine={false}
						tickFormatter={(value) => `$${value}`}
					/>
					<Bar dataKey="total" fill="#0369a1" radius={[4, 4, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</Card>
	);
};

export default Chart;
