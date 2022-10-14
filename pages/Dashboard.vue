<template>
  <div class="dashboard w-full flex">
    <SideNav class="nav" />
    <div class="main w-full">
      <div class="top w-full flex justify-center lg:justify-end py-12">
        <div class="top-items w-full lg:w-1/3 flex justify-evenly items-center">
          <p>Take a tour</p>
          <IconComponent name="mail" class="mail" mailActive />
          <IconComponent name="notification" />
          <img :src="profile" alt="" class="login-i" />
        </div>
      </div>
      <div class="board px-11 lg:pl-16 lg:pr-32">
        <h1 class="text-2xl lg:text-4xl font-extrabold mb-3">
          Update Patient Medical Record
        </h1>
        <span class="text-gray-400 text-base"
          >Click the tabs to view and edit patient medical details</span
        >
        <div class="bg-white w-full py-12 px-5 sm:px-8 md:px-24 my-10">
          <div v-for="field in data" :key="field.id">
            <h3 class="mb-6 font-extrabold text-lg">{{ field.title }}</h3>
            <div
              class="grid grid-flow-row gap-x-1 gap-y-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6"
            >
              <div
                v-for="subfield in field.investigations"
                :key="subfield.id"
                class="form-group"
              >
                <input type="checkbox" />
                <label for="" class="text-sm font-bold">{{
                  subfield.title
                }}</label>
              </div>
            </div>
            <hr class="mb-7" />
          </div>
          <div class="grid gap-x-14 gap-y-3 grid-cols-1 md:grid-cols-2">
            <div class="form-group flex flex-col">
              <label for="" class="text-gray-400 text-sm mb-2">CT Scan</label>
              <select class="select-input">
                <option hidden>*Specify</option>
                <option value="abdomen">Abdomen</option>
                <option value="bone">Bone</option>
                <option value="brain">Brain</option>
              </select>
            </div>
            <div class="form-group flex flex-col">
              <label for="" class="text-gray-400 text-sm mb-2">MRI</label>
              <select class="select-input">
                <option hidden>*Specify</option>
                <option value="breast_scans">Breast Scan</option>
                <option value="cardiac">Cardiac</option>
                <option value="functional_mri">Functional MRI</option>
              </select>
            </div>
          </div>
          <div class="w-full flex justify-center lg:justify-end">
            <button
              type="submit"
              class="btn-submit text-white mt-12 mr-0 px-8 py-3 rounded"
              @click.prevent="send"
            >
              Save and Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from '../assets/svg/pix.png'
export default {
  name: 'UserDashboard',
  // middleware: ['authenticated'],
  data() {
    return {
      profile,
      data: [
        {
          id: '1',
          title: 'X-Ray',
          investigations: [
            {
              id: '1',
              title: 'Chest',
            },
            {
              id: '2',
              title: 'Cervical Vertebrae',
            },
            {
              id: '3',
              title: 'Thoracic Vertebrae',
            },
            {
              id: '4',
              title: 'Lumbar Vartebrae',
            },
            {
              id: '5',
              title: 'Lumbo Sacral Vertebrae',
            },
            {
              id: '6',
              title: 'Wrist Joint',
            },
            {
              id: '7',
              title: 'Ankle',
            },
            {
              id: '8',
              title: 'Fingers',
            },
            {
              id: '9',
              title: 'Toes',
            },
          ],
        },
        {
          id: '2',
          title: 'Ultrasound Scan',
          investigations: [
            {
              id: '10',
              title: 'Breast',
            },
            {
              id: '11',
              title: 'Pelvis',
            },
            {
              id: '12',
              title: 'Prostate',
            },
            {
              id: '13',
              title: 'Thyroid',
            },
          ],
        },
      ],
    }
  },
  methods: {
    send() {},
  },
}
</script>

<style lang="scss">
.dashboard {
  background: #f5f5fb;
  .nav {
    height: 100vh;
    position: fixed;
  }
  .main {
    margin-left: 25%;
    .top-items {
      p {
        color: #382f9099;
        font-weight: 900;
      }
      .mail {
        .mail-inactive {
          fill: #ccc;
        }
        .mail-active {
          fill: #ff0000;
        }
      }
    }
    .board {
      h1,
      h3 {
        color: #382f90;
      }
      .select-input {
        position: relative;
        border: 1px solid #c4c4c4;
        color: #c4c4c4;
        border-radius: 5px;
        padding: 10px 20px;
      }
      .btn-submit {
        background: #382f90;
      }
    }
  }
}
</style>
