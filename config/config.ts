// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  history: {
    type: 'hash',
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },
            {
              name: 'login',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              name: 'register-result',
              icon: 'smile',
              path: '/user/register-result',
              component: './user/register-result',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          Routes: ['src/pages/Authorized'],
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/basic/point',
            },
            {
              path: '/basic',
              name: 'basic',
              routes: [
                {
                  path: '/basic/point',
                  name: 'point',
                  component: './basic/Point',
                },
                {
                  path: '/basic/rect',
                  name: 'rect',
                  component: './basic/Rect',
                },
                {
                  path: '/basic/coordinate',
                  name: 'coordinate',
                  component: './basic/Coordinate',
                },
                {
                  path: '/basic/transform',
                  name: 'transform',
                  component: './basic/Transform',
                },
                {
                  path: '/basic/cubic',
                  name: 'cubic',
                  component: './basic/Cubic',
                },
                {
                  path: '/basic/color',
                  name: 'color',
                  component: './basic/Color',
                },
                {
                  path: '/basic/cubicWithcolor',
                  name: 'cubicWithcolor',
                  component: './basic/CubicWithcolor',
                },

                {
                  path: '/basic/sunshine',
                  name: 'sunshine',
                  component: './basic/Sunshine',
                },

                {
                  path: '/basic/rotate',
                  name: 'rotate',
                  component: './basic/Rotate',
                },
                {
                  path: '/basic/moreGeometry',
                  name: 'moreGeometry',
                  component: './basic/MoreGeometry',
                },
                {
                  path: '/basic/moreGeometryII',
                  name: 'moreGeometryII',
                  component: './basic/MoreGeometryII',
                },
                {
                  path: '/basic/texture',
                  name: 'texture',
                  component: './basic/Texture',
                },
                {
                  path: '/basic/grayLevel',
                  name: 'grayLevel',
                  component: './basic/GrayLevel',
                },
                {
                  path: '/basic/chartlet',
                  name: 'chartlet',
                  component: './basic/Chartlet',
                },
                {
                  path: '/basic/opacity',
                  name: 'opacity',
                  component: './basic/Opacity',
                },
                {
                  path: '/basic/opacitytest',
                  name: 'opacitytest',
                  component: './basic/Opacitytest',
                },
              ],
            },
            {
              path: '/threejs',
              name: 'threejs',
              routes: [
                {
                  path: '/threejs/firstdemo',
                  name: 'firstdemo',
                  component: './threejs/FirstDemo',
                },
                {
                  path: '/threejs/rotate',
                  name: 'rotate',
                  component: './threejs/Rotate',
                },
                {
                  path: '/threejs/mouse',
                  name: 'mouse',
                  component: './threejs/Mouse',
                },
                {
                  path: '/threejs/moreGeo',
                  name: 'moreGeo',
                  component: './threejs/MoreGeo',
                },
                {
                  path: '/threejs/material',
                  name: 'material',
                  component: './threejs/Material',
                },
                {
                  path: '/threejs/lightPoint',
                  name: 'lightPoint',
                  component: './threejs/LightPoint',
                },
                {
                  path: '/threejs/pointPosition',
                  name: 'pointPosition',
                  component: './threejs/PointPosition',
                },
                {
                  path: '/threejs/interpolation',
                  name: 'interpolation',
                  component: './threejs/Interpolation',
                },
                {
                  path: '/threejs/normalVertor',
                  name: 'normalVertor',
                  component: './threejs/NormalVertor',
                },
                {
                  path: '/threejs/indexVertor',
                  name: 'indexVertor',
                  component: './threejs/IndexVertor',
                },
                {
                  path: '/threejs/useVertor',
                  name: 'useVertor',
                  component: './threejs/UseVertor',
                },
                {
                  path: '/threejs/face3',
                  name: 'face3',
                  component: './threejs/Face3',
                },
                {
                  path: '/threejs/accessData',
                  name: 'accessData',
                  component: './threejs/AccessData',
                },
                {
                  path: '/threejs/transform',
                  name: 'transform',
                  component: './threejs/Transform',
                },
                {
                  path: '/threejs/materialAll',
                  name: 'materialAll',
                  component: './threejs/MaterialAll',
                },
                {
                  path: '/threejs/pointAndOn',
                  name: 'pointAndOn',
                  component: './threejs/PointAndOn',
                },
                {
                  path: '/threejs/light',
                  name: 'light',
                  component: './threejs/Light',
                },
                {
                  path: '/threejs/shadow',
                  name: 'shadow',
                  component: './threejs/Shadow',
                },
              ],
            },
            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  exportStatic: {},
  esbuild: {},
});
