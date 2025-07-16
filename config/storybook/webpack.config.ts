import path from 'path';
import webpack from 'webpack';
import { buildStyleLoader } from '../build/lib/buildStyleLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'));
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map(
        (rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        }
    );

    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildStyleLoader(true));

    return config;
};
