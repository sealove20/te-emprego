<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs4>
        <v-layout justify-center>
          <v-hover>
            <v-avatar
              :size="200"
              slot-scope="{ hover }"
              :class="`elevation-${hover ? '10' : '5'}`"
              style="transition: .25s ease;cursor: pointer;">
              <v-img :aspect-ratio="1/1" :src="perfil.avatar">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out primary v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-icon color="white">edit</v-icon>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-avatar>
          </v-hover>
        </v-layout>
      </v-flex>
      <v-flex xs8>
        <v-card class="pa-3">
          <v-layout wrap row>
            <v-flex xs12>
              <span class="subheading">Informações básicas</span>
            </v-flex>
            <v-flex xs4>
              <v-text-field
                label="Nome completo"
                v-model="perfil.nome"
                hint="Seu nome completo"
                prepend-icon="person"
              />
            </v-flex>
            <v-flex xs4>
              <v-text-field
                v-model="perfil.dataNascimento"
                mask="##/##/####"
                label="Data de nascimento"
                hint="Data de nascimento"
                prepend-icon="event"
              />
            </v-flex>
            <v-flex xs4>
              <v-text-field
                v-model="perfil.contato.email"
                label="Email"
                hint="Insira um email válido"
                prepend-icon="mail"
              />
            </v-flex>
            <v-flex xs12>
              <span class="subheading">Contato</span>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                v-model="perfil.contato.endereco"
                label="Endereço"
                hint="Rua, número e bairro"
                prepend-icon="mdi-home-map-marker"
              />
            </v-flex>
            <v-flex xs6>
              <v-text-field
                v-model="perfil.contato.cidade"
                label="Cidade"
                hint="Sua cidade"
                prepend-icon="mdi-map-marker"
              />
            </v-flex>
            <v-flex xs6>
              <v-text-field
                v-model="perfil.contato.estado"
                label="Estado"
                hint="Seu estado"
                prepend-icon="mdi-map-marker"
              />
            </v-flex>
            <v-flex xs6>
              <v-text-field
                v-model="perfil.contato.telefone"
                mask="(##) #####-####"
                label="Telefone"
                hint="Insira o telefone com DDD"
                prepend-icon="phone"
              />
            </v-flex>
            <v-flex xs6>
              <v-switch
                prepend-icon="mdi-whatsapp"
                label="Possui WhatsApp"
                color="primary"
                v-model="perfil.contato.whatsApp"/>
            </v-flex>
            <v-flex xs6>
              <v-switch
                prepend-icon="mdi-telegram"
                label="Possui Telegram"
                color="primary"
                v-model="perfil.contato.telegram"/>
            </v-flex>
          </v-layout>
          <v-divider/>
          <v-layout row wrap align-center>
            <v-btn color="primary" small>
              <v-icon left small>edit</v-icon>
              Currículo
            </v-btn>
            <v-btn color="primary" small>
              <v-icon left small>edit</v-icon>
              Biografia
            </v-btn>
            <v-spacer/>
            <v-btn color="primary">
              <v-icon left small>save</v-icon>
              Salvar
            </v-btn>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      perfil: Object.assign({}, this.$store.getters.Perfil),
    };
  },
};
</script>

<style lang="scss">

</style>
