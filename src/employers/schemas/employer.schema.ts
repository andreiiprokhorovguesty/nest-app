import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class Employer {
    @Prop()
    name: string;

    @Prop()
    location: string
}

export type EmployerDocument = Employer & Document;

export const EmployerSchema = SchemaFactory.createForClass(Employer);