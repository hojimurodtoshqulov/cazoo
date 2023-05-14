const API_URL =
  "http://ec2-3-27-149-16.ap-southeast-2.compute.amazonaws.com:8080/api";

// GET cars

export interface CarsParams {
  makerId?: string;
  modelId?: string;
  minPrice?: string;
  maxPrice?: string;
  fuelType?: string[];
  minMileage?: string;
  maxMileage?: string;
  gearbox?: string[];
  minEngine?: string;
  maxEngine?: string;
  minManufacturedYear?: string;
  maxManufacturedYear?: string;
  color?: string[];
  bodyType?: string[];
  features?: string[];
}

export async function httpGetCars(queryParams: CarsParams) {
  try {
    const urlParams = new URLSearchParams() as URLSearchParams &
      Record<string, string>;

    Object.entries(queryParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => urlParams.append(key, item));
      } else if (value !== undefined) {
        urlParams.set(key, value);
      }
    });

    const params = `?${urlParams.toString()}`;
    const carsJson = await fetch(`${API_URL}/cars/filter${params}`);
    const data = await carsJson.json();
    return data;
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}

export async function httpGetMakers() {
  try {
    const responseJson = await fetch(`${API_URL}/maker`);
    const makers = await responseJson.json();
    return makers;
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}

export async function httpGetModels(makerId: number) {
  try {
    const responseJson = await fetch(`${API_URL}/model/${makerId}`);
    const models = await responseJson.json();
    return models;
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
