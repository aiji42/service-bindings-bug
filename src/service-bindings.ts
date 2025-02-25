import { WorkerEntrypoint } from "cloudflare:workers";

export default class MyService1 extends WorkerEntrypoint {
	async fetch() { return new Response(null, {status: 404}); }

	async exec() { console.log('exec called: MyService1') }
}

export class MyService2 extends WorkerEntrypoint {
	async exec() { console.log('exec called: MyService2') }
}
