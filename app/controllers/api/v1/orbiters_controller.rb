module Api
    module V1
        class OrbitersController < ApplicationController
            def index
                orbiters = Orbiter.all

                render json: OrbiterSerializer.new(orbiters).serialized_json
            end
        end
    end
end