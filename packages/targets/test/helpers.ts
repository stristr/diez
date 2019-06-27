import {CompilerOptions, Program, projectCache} from '@diez/compiler';
import {ConcreteComponentType, Target} from '@diez/engine';
import {copySync, existsSync, readdirSync, readFileSync, removeSync, writeFileSync} from 'fs-extra';
import {join} from 'path';
import {AndroidCompiler} from '../src/targets/android.handler';
import {IosCompiler} from '../src/targets/ios.handler';
import {WebCompiler} from '../src/targets/web.handler';

const workspaceExamplesRoot = join(__dirname, '..', '..', '..', 'examples');
const fixturesRoot = join(__dirname, 'fixtures');

/**
 * The location of the stub project.
 */
export const stubProjectRoot = join(workspaceExamplesRoot, 'stub');

/**
 * The build output location for the stub project.
 */
export const buildRoot = join(stubProjectRoot, 'build');

/**
 * Retrieves a golden root for a fixture and platform.
 */
export const getGoldenRoot = (fixture: string) => join(__dirname, 'goldens', `${fixture}`);

/**
 * Gets all fixtures by name.
 */
export const getFixtures = () => readdirSync(fixturesRoot);

/**
 * Retrieves an instance of a fixture component.
 */
export const getFixtureComponentDeclaration = async (fixture: string) => {
  const {[fixture]: constructor} = await import(join(fixturesRoot, fixture, fixture));
  return constructor as ConcreteComponentType;
};

/**
 * Generates a program for the specified fixture and target.
 *
 * @internal
 */
const createProgramForFixture = async (fixture: string, target: Target, options?: Partial<CompilerOptions>) => {
  projectCache.clear();
  removeSync(join(stubProjectRoot, 'assets'));

  writeFileSync(
    join(stubProjectRoot, 'src', 'index.ts'),
    readFileSync(join(fixturesRoot, fixture, `${fixture}.ts`)),
  );

  if (existsSync(join(fixturesRoot, fixture, 'assets'))) {
    copySync(join(fixturesRoot, fixture, 'assets'), join(stubProjectRoot, 'assets'));
  }

  const program = new Program(stubProjectRoot, {target, sdkVersion: '10.10.10', ...options});
  await program.run();
  return program;
};

/**
 * Creates iOS output for a fixture.
 */
export const createIosCompilerForFixture = async (fixture: string): Promise<IosCompiler> => {
  const program = await createProgramForFixture(fixture, Target.Ios, {cocoapods: true, carthage: true});
  const compiler = new IosCompiler(program);
  compiler.clear();
  return compiler;
};

/**
 * Creates Android output for a fixture.
 */
export const createAndroidCompilerForFixture = async (fixture: string): Promise<AndroidCompiler> => {
  const program = await createProgramForFixture(fixture, Target.Android);
  const compiler = new AndroidCompiler(program);
  compiler.clear();
  return compiler;
};

/**
 * Creates Web output for a fixture.
 */
export const createWebCompilerForFixture = async (
  fixture: string,
  options: Partial<CompilerOptions>,
): Promise<WebCompiler> => {
  const program = await createProgramForFixture(fixture, Target.Web, options);
  const compiler = new WebCompiler(program);
  compiler.clear();
  return compiler;
};
