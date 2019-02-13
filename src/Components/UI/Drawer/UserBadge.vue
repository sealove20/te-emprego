<template>
  <div class="pa-3 primary user-badge">
    <v-avatar
      :size="avatarSize"
      color="grey lighten-4"
      class="elevation-4"
    >
      <img :src="perfil.avatar" alt="avatar">
    </v-avatar>
    <div class="user-info">
      <v-tooltip right>
        <div class="name" slot="activator">{{ perfil.nome }}</div>
        <span>{{ perfil.nome }}</span>
      </v-tooltip>
      <v-tooltip right>
        <div class="status" slot="activator">{{ status }}</div>
        <span>Você está {{ status }}</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    perfil() {
      return this.$store.getters.Perfil;
    },
  },
  data() {
    return {
      avatarSize: 48,
      status: 'online',
    };
  },
};
</script>

<style lang="scss">
.user-badge {
  display: flex;

  .user-info {
    align-content: center;
    color: #fff;
    padding-left: 15px;
    white-space: nowrap;

    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 190px;
      font-size: 1.3em;
      font-weight: 500;
      text-shadow: 0 3px 6px rgba(#000, .4);
    }

    .status {
      color: white;
      position: relative;
      display: inline-block;
      text-shadow: 0 3px 6px rgba(#000, .4);

      &::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: #4caf50;
        border-radius: 5px;
        position: absolute;
        right: -15px;
        top: 7px;
        box-shadow: 0 3px 6px rgba(#000, .3);
      }
    }
  }
}
</style>
