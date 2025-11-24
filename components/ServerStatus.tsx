import { Button } from "@/components/ui/button";
import { Server, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function ServerStatus() {
    return (
        <section id="server" className="container py-24">
            <div className="rounded-3xl border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                                <span className="mr-1.5 flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                                System Online
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Homelab & Server</h2>
                            <p className="text-muted-foreground md:text-xl">
                                I host my own infrastructure. From media servers to development environments, it's all running on my personal hardware.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center gap-2 text-sm">
                                <Server className="h-4 w-4 text-primary" />
                                <span>Uptime: 99.9%</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Activity className="h-4 w-4 text-primary" />
                                <span>Load: Low</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <ShieldCheck className="h-4 w-4 text-primary" />
                                <span>Secure Access</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Cpu className="h-4 w-4 text-primary" />
                                <span>Dockerized</span>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button size="lg" className="w-full sm:w-auto">
                                Visit Server Portal
                            </Button>
                        </div>
                    </div>

                    <div className="bg-muted/50 p-8 md:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l">
                        <div className="relative w-full max-w-sm aspect-square rounded-full border-4 border-dashed border-primary/20 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                            <div className="absolute inset-0 rounded-full border-4 border-primary/10 scale-90"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-primary/5 scale-75"></div>
                            <div className="text-center space-y-2 z-10 animate-none" style={{ animationDirection: 'reverse' }}>
                                <Server className="h-16 w-16 mx-auto text-primary" />
                                <div className="font-mono text-xs text-muted-foreground">
                                    <div>CPU: 12%</div>
                                    <div>RAM: 8.4GB / 32GB</div>
                                    <div>TEMP: 42°C</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
