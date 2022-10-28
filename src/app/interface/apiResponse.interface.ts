import { Agent } from "./agent.interfacce";

export interface ApiResponse{
    LocalDateTime: Date;
    statusCode: number;
    HttpStatus: string;
    message: string;
    results: Agent[];
}