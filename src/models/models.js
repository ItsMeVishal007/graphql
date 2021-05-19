import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/test2', {useNewUrlParser: true, useUnifiedTopology: true});

export const Cat = mongoose.model('Cat', { name: String , age : String });
