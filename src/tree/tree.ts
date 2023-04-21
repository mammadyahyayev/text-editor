import { Component } from "../components/component";

export interface Tree {
  first(): Component | null;
  last(): Component | null;
  size(): number;
}
