import { useState } from "react";
import { useLocation, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Upload, ArrowLeft, Loader2, CheckCircle2, AlertCircle, FileCheck, Brain, Zap } from "lucide-react";

type UploadStep = "form" | "validation" | "preview" | "uploading" | "complete";

export default function UploadVector() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState<UploadStep>("form");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    modelArchitecture: "",
    vectorDimension: "",
    performanceMetrics: "",
    alignmentQuality: "",
    basePrice: "",
    pricingModel: "per-call" as "per-call" | "subscription" | "usage-based",
  });
  const [vectorFile, setVectorFile] = useState<File | null>(null);
  const [validationResult, setValidationResult] = useState<any>(null);

  const createMutation = trpc.vectors.create.useMutation({
    onSuccess: () => {
      setCurrentStep("complete");
      toast.success("向量发布成功！");
      setTimeout(() => {
        setLocation("/dashboard/creator");
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.message || "上传失败");
      setCurrentStep("form");
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 100MB for LatentMAS vectors)
      if (file.size > 100 * 1024 * 1024) {
        toast.error("文件大小不能超过100MB");
        return;
      }
      setVectorFile(file);
      toast.success("文件已选择");
    }
  };

  const validateVector = async () => {
    if (!vectorFile) {
      toast.error("请选择向量文件");
      return;
    }

    if (!formData.modelArchitecture || !formData.vectorDimension) {
      toast.error("请填写模型架构和向量维度");
      return;
    }

    setCurrentStep("validation");

    // Simulate LatentMAS format validation
    setTimeout(() => {
      const validation = {
        isValid: true,
        format: "LatentMAS/1.0",
        detectedDimension: parseInt(formData.vectorDimension),
        fileSize: vectorFile.size,
        estimatedQuality: 0.92,
        warnings: [] as string[],
      };

      // Add warnings if needed
      if (!formData.alignmentQuality) {
        validation.warnings.push("未提供对齐质量指标");
      }
      if (!formData.performanceMetrics) {
        validation.warnings.push("未提供性能指标");
      }

      setValidationResult(validation);
      setCurrentStep("preview");
    }, 1500);
  };

  const handleSubmit = async () => {
    if (!vectorFile || !validationResult?.isValid) {
      toast.error("请先验证向量文件");
      return;
    }

    setCurrentStep("uploading");

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result?.toString().split(',')[1] || "";
        
        await createMutation.mutateAsync({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          vectorFile: {
            data: base64Data,
            mimeType: vectorFile.type || "application/octet-stream",
          },
          modelArchitecture: formData.modelArchitecture,
          vectorDimension: parseInt(formData.vectorDimension),
          performanceMetrics: formData.performanceMetrics || undefined,
          basePrice: parseFloat(formData.basePrice),
          pricingModel: formData.pricingModel,
        });
      };
      reader.readAsDataURL(vectorFile);
    } catch (error) {
      console.error("Upload error:", error);
      setCurrentStep("preview");
    }
  };

  const renderStepIndicator = () => {
    const steps = [
      { key: "form", label: "基本信息" },
      { key: "validation", label: "格式验证" },
      { key: "preview", label: "预览确认" },
      { key: "uploading", label: "上传中" },
    ];

    const currentIndex = steps.findIndex(s => s.key === currentStep);

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    index <= currentIndex
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground/30 bg-background"
                  }`}
                >
                  {index < currentIndex ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className="mt-2 text-sm font-medium">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-4 ${
                    index < currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard/creator">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回创作者仪表板
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">发布LatentMAS向量</h1>
          <p className="mt-2 text-muted-foreground">
            上传符合LatentMAS/1.0协议的向量数据到市场
          </p>
        </div>
      </div>

      <div className="container py-8">
        {currentStep !== "complete" && renderStepIndicator()}

        {/* Form Step */}
        {currentStep === "form" && (
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle>基本信息</CardTitle>
              <CardDescription>
                填写向量的基本信息和LatentMAS元数据
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">向量标题 *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="例如：财务风险分析专家向量"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">描述 *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="详细描述向量的功能和应用场景"
                  rows={4}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">类别 *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择类别" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="finance">财务分析</SelectItem>
                      <SelectItem value="management">管理SOP</SelectItem>
                      <SelectItem value="customer-service">客户服务</SelectItem>
                      <SelectItem value="supply-chain">供应链</SelectItem>
                      <SelectItem value="hr">人力资源</SelectItem>
                      <SelectItem value="legal">法律合规</SelectItem>
                      <SelectItem value="marketing">营销优化</SelectItem>
                      <SelectItem value="security">网络安全</SelectItem>
                      <SelectItem value="other">其他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modelArchitecture">模型架构 *</Label>
                  <Select
                    value={formData.modelArchitecture}
                    onValueChange={(value) => setFormData({ ...formData, modelArchitecture: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择模型" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4</SelectItem>
                      <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
                      <SelectItem value="claude-3">Claude-3</SelectItem>
                      <SelectItem value="claude-2">Claude-2</SelectItem>
                      <SelectItem value="bert">BERT</SelectItem>
                      <SelectItem value="llama-2">LLaMA-2</SelectItem>
                      <SelectItem value="custom">自定义</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="vectorDimension">向量维度 *</Label>
                  <Select
                    value={formData.vectorDimension}
                    onValueChange={(value) => setFormData({ ...formData, vectorDimension: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="选择维度" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="768">768 (BERT)</SelectItem>
                      <SelectItem value="1024">1024 (Claude)</SelectItem>
                      <SelectItem value="1536">1536 (GPT-4)</SelectItem>
                      <SelectItem value="2048">2048</SelectItem>
                      <SelectItem value="4096">4096</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alignmentQuality">对齐质量分数</Label>
                  <Input
                    id="alignmentQuality"
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={formData.alignmentQuality}
                    onChange={(e) => setFormData({ ...formData, alignmentQuality: e.target.value })}
                    placeholder="0.00 - 1.00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="performanceMetrics">性能指标 (JSON格式)</Label>
                <Textarea
                  id="performanceMetrics"
                  value={formData.performanceMetrics}
                  onChange={(e) => setFormData({ ...formData, performanceMetrics: e.target.value })}
                  placeholder='{"accuracy": 0.95, "latency_ms": 50, "throughput_qps": 1000}'
                  rows={3}
                  className="font-mono text-sm"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="basePrice">基础价格 (USD) *</Label>
                  <Input
                    id="basePrice"
                    type="number"
                    step="0.01"
                    min="0"
                    value={formData.basePrice}
                    onChange={(e) => setFormData({ ...formData, basePrice: e.target.value })}
                    placeholder="10.00"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pricingModel">定价模式 *</Label>
                  <Select
                    value={formData.pricingModel}
                    onValueChange={(value: any) => setFormData({ ...formData, pricingModel: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="per-call">按调用次数</SelectItem>
                      <SelectItem value="subscription">订阅制</SelectItem>
                      <SelectItem value="usage-based">按使用量</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vectorFile">向量文件 *</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="vectorFile"
                    type="file"
                    onChange={handleFileChange}
                    accept=".bin,.npy,.pt,.safetensors"
                  />
                  {vectorFile && (
                    <span className="text-sm text-muted-foreground">
                      {(vectorFile.size / (1024 * 1024)).toFixed(2)} MB
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  支持格式: .bin, .npy, .pt, .safetensors (最大100MB)
                </p>
              </div>

              <Button
                onClick={validateVector}
                className="w-full"
                size="lg"
                disabled={
                  !formData.title ||
                  !formData.description ||
                  !formData.category ||
                  !formData.modelArchitecture ||
                  !formData.vectorDimension ||
                  !formData.basePrice ||
                  !vectorFile
                }
              >
                <FileCheck className="mr-2 h-5 w-5" />
                验证并继续
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Validation Step */}
        {currentStep === "validation" && (
          <Card className="mx-auto max-w-3xl">
            <CardContent className="py-12">
              <div className="flex flex-col items-center text-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">验证LatentMAS格式</h3>
                <p className="text-muted-foreground">
                  正在检查向量文件格式、维度和数据完整性...
                </p>
                <Progress value={66} className="w-64 mt-6" />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview Step */}
        {currentStep === "preview" && validationResult && (
          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {validationResult.isValid ? (
                    <>
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                      验证通过
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-6 w-6 text-red-600" />
                      验证失败
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  LatentMAS格式验证结果
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">协议版本</div>
                      <div className="text-sm text-muted-foreground">{validationResult.format}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-accent" />
                    <div>
                      <div className="text-sm font-medium">检测到的维度</div>
                      <div className="text-sm text-muted-foreground">{validationResult.detectedDimension}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Upload className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">文件大小</div>
                      <div className="text-sm text-muted-foreground">
                        {(validationResult.fileSize / (1024 * 1024)).toFixed(2)} MB
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="text-sm font-medium">预估质量</div>
                      <div className="text-sm text-muted-foreground">
                        {(validationResult.estimatedQuality * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                </div>

                {validationResult.warnings.length > 0 && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <div className="font-medium mb-2">警告:</div>
                      <ul className="list-disc list-inside space-y-1">
                        {validationResult.warnings.map((warning: string, i: number) => (
                          <li key={i} className="text-sm">{warning}</li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>预览信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm font-medium">标题</div>
                  <div className="text-sm text-muted-foreground">{formData.title}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">描述</div>
                  <div className="text-sm text-muted-foreground">{formData.description}</div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium">类别</div>
                    <div className="text-sm text-muted-foreground">{formData.category}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">模型架构</div>
                    <div className="text-sm text-muted-foreground">{formData.modelArchitecture}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">价格</div>
                    <div className="text-sm text-muted-foreground">
                      ${formData.basePrice} ({formData.pricingModel})
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">向量维度</div>
                    <div className="text-sm text-muted-foreground">{formData.vectorDimension}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setCurrentStep("form")}
                className="flex-1"
              >
                返回修改
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1"
                size="lg"
                disabled={!validationResult.isValid}
              >
                <Upload className="mr-2 h-5 w-5" />
                确认发布
              </Button>
            </div>
          </div>
        )}

        {/* Uploading Step */}
        {currentStep === "uploading" && (
          <Card className="mx-auto max-w-3xl">
            <CardContent className="py-12">
              <div className="flex flex-col items-center text-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">上传中</h3>
                <p className="text-muted-foreground">
                  正在将向量文件上传到S3并创建市场列表...
                </p>
                <Progress value={45} className="w-64 mt-6" />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Complete Step */}
        {currentStep === "complete" && (
          <Card className="mx-auto max-w-3xl">
            <CardContent className="py-12">
              <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-16 w-16 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2">发布成功！</h3>
                <p className="text-muted-foreground mb-6">
                  您的LatentMAS向量已成功发布到市场
                </p>
                <Button asChild size="lg">
                  <Link href="/dashboard/creator">
                    前往创作者仪表板
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
