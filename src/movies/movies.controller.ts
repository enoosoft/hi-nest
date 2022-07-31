import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'This will return all movies';
    }
    
    ///:id 보다 위에 있어야 /search로 인식히지 않는다
    @Get('search')
    search(@Query('year') searchingYear: string){
        return `We ar searching for movie made after: ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string){
        return `This will return one movie with the id : ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return `This will delete a movie with the id : ${movieId}`;
    }

    @Patch('/:id')
    update(@Param('id') movieId:string, @Body() updateData){
        return {
            updatedMovie: movieId, 
            ...updateData,
        };
    }

}
