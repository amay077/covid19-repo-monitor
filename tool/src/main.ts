import axios  from 'axios';
import { CommandGenerate } from './command-generate';
import dotenv from 'dotenv';

async function main(): Promise<number> {
  dotenv.config();
  return await new CommandGenerate().run();
}

main().then(code => {
  process.exit(code);
})
