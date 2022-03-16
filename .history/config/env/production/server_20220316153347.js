module.exports = ({ env }) => ({
    url: env("https://noahs-nuclear-weapons.herokuapp.comgit "),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
    },
  });