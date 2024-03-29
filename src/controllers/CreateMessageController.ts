import { Request, Response } from "express";
import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;

    const service = new CreateMessageService();

    try {
      const result = await service.execute(message, request.user_id);

      return response.json(result);
    } catch (error) {
      return response.json(error);
    }
    
  }
}

export { CreateMessageController };