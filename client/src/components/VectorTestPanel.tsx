import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Play, Clock, DollarSign, CheckCircle2, XCircle } from "lucide-react";

interface VectorTestPanelProps {
  vectorId: number;
  hasAccess: boolean;
  pricingModel: string;
  basePrice: string;
}

export function VectorTestPanel({ vectorId, hasAccess, pricingModel, basePrice }: VectorTestPanelProps) {
  const [inputData, setInputData] = useState("");
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const invokeMutation = trpc.vectors.invoke.useMutation();
  const { data: history, refetch: refetchHistory } = trpc.vectors.invocationHistory.useQuery(
    { vectorId, limit: 5 },
    { enabled: hasAccess }
  );

  const handleTest = async () => {
    if (!inputData.trim()) {
      setError("请输入测试数据");
      return;
    }

    setIsExecuting(true);
    setError(null);
    setResult(null);

    try {
      const parsedInput = JSON.parse(inputData);
      const response = await invokeMutation.mutateAsync({
        vectorId,
        inputData: parsedInput,
      });

      setResult(response);
      refetchHistory();
    } catch (err: any) {
      setError(err.message || "调用失败");
    } finally {
      setIsExecuting(false);
    }
  };

  if (!hasAccess) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>测试向量</CardTitle>
          <CardDescription>购买此向量后即可进行测试</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <AlertDescription>
              您需要先购买此向量才能使用测试功能。价格：{basePrice} ({pricingModel})
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>测试向量</CardTitle>
          <CardDescription>
            输入JSON格式的测试数据，实时调用向量并查看结果
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">输入数据 (JSON格式)</label>
            <Textarea
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              placeholder='{"prompt": "你的输入数据", "parameters": {...}}'
              rows={6}
              className="font-mono text-sm"
            />
          </div>

          <Button
            onClick={handleTest}
            disabled={isExecuting || !inputData.trim()}
            className="w-full"
          >
            {isExecuting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                执行中...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                运行测试
              </>
            )}
          </Button>

          {error && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {result && (
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">执行成功</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>执行时间: {result.executionTime}ms</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>成本: ${result.cost}</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">输出结果</label>
                <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm font-mono max-h-64">
                  {JSON.stringify(result.output, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {history && history.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>调用历史</CardTitle>
            <CardDescription>最近5次调用记录</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {history.map((record: any) => (
                <div
                  key={record.id}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      {record.status === "success" ? (
                        <span className="text-green-600">成功</span>
                      ) : (
                        <span className="text-red-600">失败</span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(record.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div>{record.executionTime}ms</div>
                    <div className="text-muted-foreground">${record.cost}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
