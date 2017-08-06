// @flow

const ENVIRONMENT_KEY = Symbol.for('App.Namespace.Environment');
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasKey = !!~globalSymbols.indexOf(ENVIRONMENT_KEY);

if (!hasKey) {
  global[ENVIRONMENT_KEY] = {};
}

const vars = global[ENVIRONMENT_KEY];

export default {

  set(v: Object | EnvironmentKey, ...args: any[]): void {
    if (!args.length && typeof v === 'object') {
      this.setVars(v);
      return;
    } else if (typeof v === 'string') {
      this.setVar(v, args[0]);
      return;
    }
  },

  setVar(key: EnvironmentKey, val: any): void {
    vars[key] = val;
  },

  setVars(variables: {[key: EnvironmentKey]: any}): void {
    for (let key in variables) {
      const k: EnvironmentKey = (key: any);
      this.setVar(key, variables[k]);
    }
  },

  get(key: EnvironmentKey): any  {
    return vars[key];
  },

}
