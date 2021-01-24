import { NextFunction, Request, Response } from 'express';
import { RequestWithUser } from '../interfaces/auth.interface';
import participantService from '../services/participants.service';

import { User } from '../interfaces/users.interface';
import { Board } from '../interfaces/boards.interface';

class ParticipantsController {
  public participantService = new participantService();

  public getParticipants = async (req: Request, res: Response, next: NextFunction) => {
    const { boardId } = req.query;

    try {
      const findParticipantsData: User[] = await this.participantService.findParticipants(boardId);
      res.status(200).json(findParticipantsData);
    } catch (error) {
      next(error);
    }
  };

  public createParticipant = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const { boardId } = req.body;
    const userData: User = req.user;

    try {
      const addedParticipantData: User = await this.participantService.createParticipant(boardId, userData);
      res.status(201).json(addedParticipantData);
    } catch (error) {
      next(error);
    }
  };
}

export default ParticipantsController;
