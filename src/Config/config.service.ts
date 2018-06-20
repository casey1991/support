import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';
export interface EnvConfig {
  [prop: string]: string;
}
export class ConfigService {
  private readonly envConfig: { [prop: string]: string };
  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test'])
        .default('development'),
      PORT: Joi.number().default(3000),
    });
    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );
    if (error) throw new Error(`Config validation error ${error.message}`);
    return validatedEnvConfig;
  }
  get(key: string): string {
    return this.envConfig[key];
  }
}
