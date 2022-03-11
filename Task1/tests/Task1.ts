import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Task1 } from '../target/types/task1';

describe('Task1', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Task1 as Program<Task1>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
