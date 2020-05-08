module.exports = {
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs:3
      }
    ]
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        corejs:3,
        "targets": "> 0.25%, not dead"
      }
    ]
  ]
}