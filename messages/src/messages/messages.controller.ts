import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {
  }

  @Get()
  async listMessages() {
    return await this.messagesService.findAll();
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return await this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const messageCandidate = await this.messagesService.findOne(id);
    if(!messageCandidate) throw new NotFoundException();
    return messageCandidate;
  }
}
