import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ClientsService } from "./clients.service";
import { CreateClients } from "./cli/create_cli.cli";


@Controller("clients")
export class ClientsController {
    constructor(private readonly clientSerive: ClientsService){}

    @Post() //create client
    create(@Body() cli:CreateClients){
        return this.clientSerive.create(cli);
    }
    
    @Get() //Get All clients
    findAll(){
        return this.clientSerive.findAll();
    }

    @Get(":id") //Get All clients
    findOne(@Param("id") id:number){
        return this.clientSerive.findOne(id);
    }

    @Put(":id") //Update client
    update(@Param("id") id:number, @Body()  cli:CreateClients){
        return this.clientSerive.update(id,cli);
    }

    @Delete(":id")
    remove(@Param("id") id:number){
        return this.clientSerive.remove(id);
    }


}